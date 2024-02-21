import './App.css'
import Avatar from './assets/Avatar.jpg'

function App() {
 

  return (
    <div className='bg-darkGrey w-[420px] mx-auto p-6 mt-12 space-y-4 rounded-lg'>
      <img src={Avatar} alt='User_Avatar' className='rounded-full w-[120px] h-[120px] mx-auto'
      />
      <h1 className='text-white text-center text-2xl font-bold'>Orakwue Chukwudi</h1>
      <h3 className='text-green text-center font-bold'>Abuja, Nigeria</h3>
      <p className='text-white text-center'>"Front-end developer, Tenor"</p>
      <div className='flex flex-col space-y-4'>
     <a href='https://github.com/TheKhobe'><div className='bg-grey py-4 rounded-md text-center text-white font-bold'>GitHub</div> </a>
     <a href='https://www.frontendmentor.io/profile/TheKhobe'><div className='bg-grey py-4 rounded-md text-center text-white font-bold'>Frontend Mentor</div></a>
     <a href='https://www.frontendmentor.io/profile/TheKhobe'><div className='bg-grey py-4 rounded-md text-center text-white font-bold'>LinkedIn</div></a>
     <a href='https://twitter.com/KhobeeL'><div className='bg-grey py-4 rounded-md text-center text-white font-bold'>Twitter(X)</div></a>
     <a href='https://www.instagram.com/khobe_of_africa/'><div className='bg-grey py-4 rounded-md text-center text-white font-bold'>Instagram</div></a>
      </div>
    </div>
  )
}

export default App
