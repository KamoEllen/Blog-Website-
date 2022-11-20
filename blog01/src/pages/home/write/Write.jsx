import './write.css'

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg" src="https://images7.alphacoders.com/895/895374.png"/>
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" styele={{display:"none"}}/>
                <input type="text" placeholder="Title"  className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeForm">
                <textarea placeholder="Tell your story..." type="text" className="writeInputwriteText"></textarea>
            </div>
         <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
