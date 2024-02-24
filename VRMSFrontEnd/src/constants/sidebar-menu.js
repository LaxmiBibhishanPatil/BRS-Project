import DashboardIcon from '../assets/icons/dashboard.svg';
import ShippingIcon from '../assets/icons/shipping.svg';
import ProductIcon from '../assets/icons/product.svg';
import UserIcon from '../assets/icons/user.svg';

const sidebar_menu = [
    {
        id: 2,
        icon: UserIcon,
        path: '/Profile',
        title: 'My account',
    }
    ,
    {
        id: 12,
        icon: DashboardIcon,
        path: '/GetRevenue',
        title: 'Revenue',
    },
    {
        id: 5,
        icon: ShippingIcon,
        path: '/Users',
        title: 'Users',
    },

    {
        id: 3,
        icon: ProductIcon,
        path: '/AllVehicles',
        title: 'All vehicles',
    },

   
    {
        id: 6,
        icon: ProductIcon,
        path: '/AvailableVehicles',
        title: 'Available vehicles',
    },
    {
        id: 7,
        icon: ProductIcon,
        path: '/ReservedVehicles',
        title: 'Reserved vehicles',
    },

    {
        id: 8,
        icon: DashboardIcon,
        path: '/ServiceLocations',
        title: 'Service Locations',
    }, 
    {
        id: 9,
        icon: ShippingIcon,
        path: '/Bookings',
        title: 'Bookings',
    }, 
    {
        id: 10,
        icon: ShippingIcon,
        path: '/BookingsWithFeedback',
        title: 'Bookings With Feedback',
    },
    {
        id: 11,
        icon: ShippingIcon,
        path: '/WebsiteFeedback',
        title: 'Website Feedback',
    },
]




export default sidebar_menu;