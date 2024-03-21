const axios = require("axios")

const mostrarFormulario = () => {
    const main = document.querySelector("[data-main]")

    const formularioExistente = document.querySelector(".formulario");

    if (!formularioExistente) {
        const container = `
        <form>
        <h2>Complete the form to create a new movie.</h2>
        <div class="campo">
            <label>Title</label>
            <input
                name ="title"
                placeholder= "Insert title..."
                type="text"
            />
        </div> 
        <div class="campo">
            <label>Year</label>
            <input
                name ="year"
                placeholder= "Insert year..."
                type="number"
            />
        </div> 
        <div class="campo">
            <label>Director</label>
            <input
                name ="director"
                placeholder= "Insert director..."
                type="text"
            />
        </div>
        <div class="campo">
            <label>Duration</label>
            <input
                name ="duration"
                placeholder= "Insert duration..."
                type="text"
            />
        </div>
        <div class="lista-opciones">
            <label>Genres</label>
            <div class = "mb-3" id="contenedorOpciones"> </div>
            <div class = custom-select>
                <span class="placeholders">Select genre</span>
                <div class="options">
                    <div class="opciones"><input type="checkbox" value="Action"> Action</div>
                    <div class="opciones"><input type="checkbox" value="Adventure"> Adventure</div>
                    <div class="opciones"><input type="checkbox" value="Comedy"> Comedy</div>
                    <div class="opciones"><input type="checkbox" value="Fantasy"> Fantasy</div>
                    <div class="opciones"><input type="checkbox" value="Sci-Fi"> Sci-Fi</div>
                    <div class="opciones"><input type="checkbox" value="Drama"> Drama</div>
                </div>
            </div>
        </div>
        <div class="campo">
            <label>Rate</label>
            <input
                name ="rate"
                placeholder= "Insert rate..."
                type="number"
            />
        </div> 
        <div class="campo">
            <label>Poster</label>
            <input
                name ="poster"
                placeholder= "Insert poster..."
                type="text"
            />
        </div> 
        <div class= "botones">
            <button class="boton" id="btnSubmit">
                Create
            </button>
            <button class="boton" id="btnClean">
                Clean
            </button>
        </div>

    </form>`
        
        const section = document.createElement('section');
        section.classList.add("formulario");
        section.innerHTML = container;
        main.appendChild(section);

    } else { formularioExistente.remove() }

        /* Inputs focus */
        
        const inputs = document.querySelectorAll('.campo input');
        
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('input-active');
            });
            
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('input-active');
            });
        });

        /* Multiple Options */

        let click = false;

        document.addEventListener("click", (event) => {
            const customSelect = document.querySelector(".custom-select");

            if(customSelect){            
                if (event.target.closest(".custom-select") && click != true) {
                customSelect.querySelector(".options").style.display = "block";
                click = true
              } else if(!event.target.closest(".custom-select") || click) {
                customSelect.querySelector(".options").style.display = "none";
                click = false
              }}
        });

        const opciones = document.querySelectorAll(".opciones input[type='checkbox']");

        if (opciones) {
            opciones.forEach(opcion => {
                opcion.addEventListener("click", (event) => {
                    // Detener la propagación del evento
                    event.stopPropagation();
                });
            });
        }

        const selectOpciones = document.getElementsByClassName("opciones");
        const contenedorOpciones = document.getElementById("contenedorOpciones");

        for (let i = 0; i < selectOpciones.length; i++) {
            const checkbox = selectOpciones[i].querySelector("input[type='checkbox']");
        
            let opcionSeleccionada;

            checkbox.addEventListener("change", function() {

                if (checkbox.checked) {
                    opcionSeleccionada = document.createElement("div");
                    opcionSeleccionada.classList.add("opcionSeleccionada");
                    opcionSeleccionada.innerHTML = `${checkbox.value}`;

                    contenedorOpciones.appendChild(opcionSeleccionada);  
                } else {
                    contenedorOpciones.removeChild(opcionSeleccionada);
                }
            });
        }
        
        /* ButtonSubmit */

        const buttonSubmit = document.getElementById("btnSubmit")

        let valuesInputs = {};

        if(buttonSubmit) {
            const checkboxes = document.querySelectorAll('.opciones input[type="checkbox"]');

            buttonSubmit.addEventListener("click", (e) => {        
                e.preventDefault();

                /* Validacion */
                let camposVacios = false

                inputs.forEach((input) => {
                    const value = input.value;
                    
                    if( value.trim() === "") {
                        camposVacios = true
                    };
                })

                for (let i = 0; i < checkboxes.length; i++) {
                    if (checkboxes[i].checked) {
                        camposVacios = false
                        break
                    }
                    else camposVacios = true
                }
                
                if (camposVacios){
                    alert("Hay campos vacíos aún");
                }                
                else {
                    inputs.forEach((input) => {
                        const value = input.value;
                        const name = input.getAttribute('name');
                        valuesInputs[name] = value; 
                    })
                        
                    const sendDataBack = async () => {
                        try {
                        const response = await axios.post("http://localhost:3000/movies", valuesInputs); 
                        return response.data;
                        } catch (error) {
                        console.error('Error al enviar los datos al backend:', error);
                        }
                    }
                    sendDataBack();

                    window.location.href = "http://127.0.0.1:5501/front/pages/registroCompletado.html#"
                } 
            })
        }

        /* ButtonClean */

        const buttonClean = document.getElementById("btnClean")

        if(buttonClean) {
            buttonClean.addEventListener("click", (event) => {
                event.preventDefault()
                inputs.forEach(input => { input.value = ""})
                for (let i = 0; i < selectOpciones.length; i++) {
                    const checkbox = selectOpciones[i].querySelector("input[type='checkbox']");
                    if (checkbox.checked) {
                        checkbox.checked = false;
                    }
                }
                contenedorOpciones.innerHTML ="";
            })
        }
        
};

module.exports = {
    mostrarFormulario,
}