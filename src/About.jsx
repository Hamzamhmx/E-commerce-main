import { HeroSection } from './components/HeroSection'
import { useProductContect } from './context/productContext';

export const About = () => {
 

  const data = {
    name: 'my e-commerce'
  }
  return (
    <>
   
      <HeroSection myData={data} />
    </>
  )
}