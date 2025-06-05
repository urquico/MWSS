import { Box } from '@mantine/core';
import { IconLogout2 } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/useAuthStore';
import Swal from 'sweetalert2';


const LogoutButton = () => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: 'Are you sure you want to logout?',
      text: 'You’ll need to sign in again to continue.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Yes, logout',
    });

    if (result.isConfirmed) {
      try {
        await logout();
        navigate('/');
      } catch (error) {
        Swal.fire('Error', 'Logout failed. Please try again.', 'error');
      }
    }
  };
  return (
    <Box
      onClick={handleLogout}
      className="flex-[1] flex items-center justify-center cursor-pointer 
        transition-colors duration-300 
        bg-[#C0C5C8] hover:bg-[#3a7bff] 
        rounded-[12px] p-5"
    >
      <IconLogout2 size={28} color="white" />
    </Box>
  );
};

export default LogoutButton;
