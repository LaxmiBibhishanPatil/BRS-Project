package com.app.dao;
import java.util.List;
import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.BookingDetailsEntity;
import com.app.entities.Vehicle;

public interface BookingRepository extends JpaRepository<BookingDetailsEntity, Long> {
	
	Optional<List<BookingDetailsEntity>> findByVehicle(Vehicle v);

	@Query(
	value="select sum(amount) from booking_details where status='successful' and year(book_date)= :year group by status",
	nativeQuery=true)
	
	//@Query(value="select sum(b.amount) from booking_details b where b.status='successful' and year(b.book_date)= :year group by b.status")
	Double findRevenueByYear(@Param("year") Integer year);
}
