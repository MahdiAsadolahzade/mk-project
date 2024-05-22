'use client'
import '../sass/styles.scss'
import Button from '@/components/Button'
import Container from '@/components/Container'
import { ThemeProvider , useTheme } from './providers/ThemeProvider'

export default function Home() {
  return (
    <ThemeProvider>
    <Content />
    <Container>
     
     <Container><Button type={'primary'} >test</Button></Container>
      
         <Container><Button type={'primary'} >test</Button></Container>
         <Container><Button type={'primary'} >test</Button></Container>
 ;;;;;;;;;;;;;;;
 ddd
      
     </Container>
  </ThemeProvider>
  )
}


const Content = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
