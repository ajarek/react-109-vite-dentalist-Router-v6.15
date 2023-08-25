import './Gallery.css'
const Gallery = () => {
  return (
    
      <div className='gallery'>
        
        <h1>Galeria</h1>
        <p>
        Kilka migawek na temat naszych usług dla Ciebie! To tylko niewielka część naszych usług.
        </p>
       <div className="gallery-wrapper1-3">
        <div className="img">
          <img src="/images/root-canals1.png" alt="" />
        </div>
        <div className="img">
          <img src="/images/root-canals2.png" alt="" />
        </div>
        <div className="img">
          <img src="/images/root-canals3.png" alt="" />
        </div>
        </div>
        <div className="gallery-wrapper4-6">
        <div className="img">
          <img src="/images/root-canals4.png" alt="" />
        </div>
        <div className="img">
          <img src="/images/root-canals5.png" alt="" />
        </div>
        <div className="img">
          <img src="/images/root-canals6.png" alt="" />
        </div>
       </div>
    </div>
  )
}

export default Gallery