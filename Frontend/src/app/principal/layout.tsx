
import BarNAv from "../ui/barnav/barnav";
import Footer from "../ui/footer/footer";




export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      
        <div className="flex flex-col ">
   
        <BarNAv />

        
        <div className="mt-16 flex-grow p-6  overflow-auto">{children}</div>
        <Footer/>
      </div>
      
      
    );
  }