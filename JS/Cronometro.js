        // Establecemos el tiempo inicial en segundos (40 minutos = 2400 segundos)
        var tiempoRestante = 2400;

        // Función para actualizar el cronómetro
        function actualizarCronometro() {
            var minutos = Math.floor(tiempoRestante / 60);
            var segundos = tiempoRestante % 60;

            // Formateamos los minutos y segundos con ceros a la izquierda si es necesario
            minutos = minutos < 10 ? "0" + minutos : minutos;
            segundos = segundos < 10 ? "0" + segundos : segundos;

            // Actualizamos el contenido del elemento con id "cronometro"
            document.getElementById("cronometro").innerText = "Tiempo restante: " + minutos + ":" + segundos;

            // Disminuimos el tiempo restante
            tiempoRestante--;

            // Verificamos si el tiempo ha llegado a cero
            if (tiempoRestante < 0) {
                // Redirigimos a otra página al finalizar el tiempo
                window.location.href = 'index.html';
            } else {
                // Llamamos a la función nuevamente después de 1 segundo (1000 milisegundos)
                setTimeout(actualizarCronometro, 1000);
            }
        }

        // Llamamos a la función para iniciar el cronómetro al cargar la página
        actualizarCronometro();