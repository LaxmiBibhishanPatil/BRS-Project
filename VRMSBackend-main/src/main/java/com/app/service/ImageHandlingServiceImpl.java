package com.app.service;

import java.io.File;
import java.io.IOException;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import com.app.dao.VehicleRepository;
import com.app.dto.ApiResponse;
import com.app.entities.Vehicle;


@Service
@Transactional
public class ImageHandlingServiceImpl implements ImageHandlingService {
	@Autowired
	private VehicleRepository vehicleRepo;

	// to inject the value of the property , from app property file , using Field DI
	// , using SpEL : Spring expr language
	@Value("${folder.location}")
	private String folderLocation;

	@PostConstruct
	public void init() {
		System.out.println("in init " + folderLocation);
		// chk if folder exists --yes --continue
		File folder = new File(folderLocation);
		if (folder.exists()) {
			System.out.println("folder exists alrdy !");
		} else {
			// no --create a folder
			folder.mkdir();
			System.out.println("created a folder !");
		}
	}

	@Override
	public ApiResponse uploadImage(Long vehicleId, MultipartFile image) throws IOException {
		// get vehicle from vehicle id
		Vehicle vehicle = vehicleRepo.findById(vehicleId).orElseThrow(() -> new RuntimeException("Invalid Vehicle ID!!!!"));
		// vehicle found --> PERSISTENT
		// store the image on server side folder
		String path = folderLocation.concat(image.getOriginalFilename());
		System.out.println(path);
		// Use FileUtils method : writeByte[] --> File
		FileUtils.writeByteArrayToFile(new File(path), image.getBytes());
		// set image path
		vehicle.setImagePath(path);
		// OR to store the img directly in DB as a BLOB
		// vehicle.setImage(image.getBytes());
		return new ApiResponse("Image file uploaded successfully for vehicle id " + vehicleId);
	}

	@Override
	public byte[] downloadImage(Long vehicleId) throws IOException {
		// get vehicle by id
		Vehicle vehicle = vehicleRepo.findById(vehicleId).orElseThrow(() -> new RuntimeException("Invalid vehicle ID!!!!"));
		// vehicle found --> PERSISTENT
		String path = vehicle.getImagePath();
		if (path != null) {
			return FileUtils.readFileToByteArray(new File(path));
		} else
			throw new RuntimeException("Image not yet assigned !!!!");
	}

}
