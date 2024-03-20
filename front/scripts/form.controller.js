const mostrarFormulario = () => {
    const main = document.querySelector("[data-main]")

    const formularioExistente = document.querySelector(".formulario");

    if (!formularioExistente) {
        const container = `
        <form onSubmit={manejarEnvio}>
        <h2>Complete the form to create a new movie.</h2>
        <div class="campo">
            <label>Title</label>
            <input
                placeholder= "Insert title..."
                required
                type="text"
            />
        </div> 
        <div class="campo">
            <label>Year</label>
            <input
                placeholder= "Insert year..."
                required
                type="text"
            />
        </div> 
        <div class="campo">
            <label>Director</label>
            <input
                placeholder= "Insert director..."
                required
                type="text"
            />
        </div>
        <div class="campo">
            <label>Duration</label>
            <input
                placeholder= "Insert duration..."
                required
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
                placeholder= "Insert rate..."
                required
                type="text"
            />
        </div> 
        <div class="campo">
            <label>Poster</label>
            <input
                placeholder= "Insert poster..."
                required
                type="text"
            />
        </div> 
        <div class= "botones">
            <button class="boton">
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

module.exports = mostrarFormulario