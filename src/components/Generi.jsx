function Generi() {
    return (
        <div className="bg-dark d-flex ps-4 pb-3 justify-content-between">
            <div className="d-flex">
                <h4 className="text-light">TV Shows</h4>
                <select name="Genres" id="Genres" className="bg-black text-white ms-3">
                    <optgroup label="Generi">
                    <option value="az">Azione</option>
                    <option value="hor">Horror</option>
                    <option value="hor">Thriller</option>
                    </optgroup>
                </select>
            </div>

            <div>
                <i className="bi bi-grid-fill"></i>
                <i className="bi bi-grid-3x3-gap-fill me-4"></i>
            </div>
        </div>
    )
}

export default Generi;