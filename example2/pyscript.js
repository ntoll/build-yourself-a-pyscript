class PyScript extends HTMLElement {
    connectedCallback() {
        const code = this.textContent;  // grab the source code.
        this.textContent = "";  // Remove the code from the DOM.
        // Handle STDOUT
        document.addEventListener('micropython-print', function(e) {
            this.textContent = this.textContent + "<code>" + e.output + "</code>"
        }, false);
        // Start up MicroPython
        let mp_js_startup = Module['onRuntimeInitialized'];
        Module["onRuntimeInitialized"] = async function() {
            mp_js_startup();
            mp_js_init(1024*1024);
            mp_js_do_str(code);
        }
    }
}

const interpreterElement = document.createElement("script");
interpreterElement.src = "mpbuild/micropython.js";
interpreterElement.onload = function(e) {
    // Register the class for the given element name.
    customElements.define("py-script", PyScript);
}
