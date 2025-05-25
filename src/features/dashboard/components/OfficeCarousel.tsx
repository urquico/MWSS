import IconArrowLeft from '@/components/icons/IconArrowLeft';
import IconArrowRight from '@/components/icons/IconArrowRight';
import { AdminDashboardContext } from '@/features/dashboard/provider/admin-dashboard-provider';
import { Carousel } from '@mantine/carousel';
import { useContext } from 'react';

function OfficeCarousel() {
  // Fetch data based on role and officeId
  const data = useContext(AdminDashboardContext);

  // Extract data safely with fallback empty arrays
  const offices = data?.data?.offices ?? [];

  return (
    <Carousel
      height='100%'
      loop
      align='center'
      controlsOffset='2rem'
      className='h-full rounded-md border border-[#cbd5e1] bg-white px-20 py-10'
      slidesToScroll={1}
      // slideSize={{ base: '80%', sm: '50%', md: '25%', lg: '25%' }}
      nextControlIcon={
        <IconArrowRight className='h-8 w-8 rounded-full border-2 border-black p-1' />
      }
      previousControlIcon={
        <IconArrowLeft className='h-8 w-8 rounded-full border-2 border-black p-1' />
      }
    >
      {offices.length > 0 ? (
        offices.map((office) => (
          // <Carousel.Slide
          //   key={office.id}
          //   className='mx-2 flex items-center justify-center rounded-lg border border-[#cbd5e1] bg-[#f5f5f5] p-4'
          // >
          <Carousel.Slide
            key={office.id}
            className='mx-2 flex items-center justify-center rounded-lg border border-[#cbd5e1] bg-[#f5f5f5] p-4 sm:max-w-full md:max-w-[15rem] lg:max-w-[20rem]'
          >
            <section className='text-center font-poppins font-semibold'>
              <p className='mb-2 mr-4 text-lg text-[#424242]'>
                {office.office_name}
              </p>
              <p className='font-montserrat text-5xl text-primary'>
                {office.visitors ?? 0}
              </p>
              <p className='font-light text-[#9e9e9e]'>Visitor(s)</p>
            </section>
          </Carousel.Slide>
        ))
      ) : (
        <p className='text-gray-500 text-center text-lg font-semibold'>
          No office data available
        </p>
      )}
    </Carousel>
  );
}

export default OfficeCarousel;
