const Gallery = () => {
    return (
        <div className="gallery-container">
            <h1 className="judul">GALLERY</h1>
            <div className="gallery-row">
                <div className="gallery-item">
                    <a href="YAYASBOS.jpg">
                        <img src="YAYASBOS.jpg" alt="Image 1" className="gallery-image" />
                        <div className="image-overlay">
                            <p>BOS YAYAS</p>
                        </div>
                    </a>
                </div>
                <div className="gallery-item">
                    <a href="YAYASGANTENG.jpg">
                        <img src="YAYASGANTENG.jpg" alt="Image 2" className="gallery-image" />
                        <div className="image-overlay">
                            <p>YAYAS GANTENG</p>
                        </div>
                    </a>
                </div>
                <div className="gallery-item">
                    <a href="YAYASGONDONDRONG.jpg">
                        <img src="YAYASGONDRONG.jpg" alt="Image 3" className="gallery-image" />
                        <div className="image-overlay">
                            <p>YAYAS GONDRONG</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="gallery-row">
                <div className="gallery-item">
                    <a href="YAYASSHOLEH.jpg">
                        <img src="YAYASSHOLEH.jpg" alt="Image 4" className="gallery-image" />
                        <div className="image-overlay">
                            <p>YAYAS SHOLEH</p>
                        </div>
                    </a>
                </div>
                <div className="gallery-item">
                    <a href="YAYASUCING.jpg">
                        <img src="YAYASUCING.jpg" alt="Image 5" className="gallery-image" />
                        <div className="image-overlay">
                            <p>YAYAS UCING</p>
                        </div>
                    </a>
                </div>
                <div className="gallery-item">
                    <a href="YAYASFUTSAL.jpg">
                        <img src="YAYASFUTSAL.jpg" alt="Image 6" className="gallery-image" />
                        <div className="image-overlay">
                            <p>YAYAS FUTSAL</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
