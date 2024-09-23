 new Vue({
        el: '#app',
        data: {
            activeTab: 'calificaciones', // Pestaña activa
            search: '', // Valor del buscador
            nota1: null,
            nota2: null,
            nota3: null,
            asistencia: null,
            resultado: '',
            registro: {
                nombre: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            errores: {
                nota1: false,
                nota2: false,
                nota3: false,
                email: false,
                password: false
            }
        },
        methods: {
            validarNota(nota) {
                // Valida si la nota es inferior a 10 o superior a 70
                if (this[nota] < 10 || this[nota] > 70) {
                    this.errores[nota] = true;
                } else {
                    this.errores[nota] = false;
                }
            },
            calcularNotaFinal() {
                if (this.nota1 >= 10 && this.nota1 <= 70 && this.nota2 >= 10 && this.nota2 <= 70 && this.nota3 >= 10 && this.nota3 <= 70) {
                    const notaFinal = (this.nota1 * 0.35) + (this.nota2 * 0.35) + (this.nota3 * 0.30);
                    const aprobado = notaFinal >= 40 && this.asistencia >= 80;

                    this.resultado = aprobado
                        ? `Aprobado. Nota final: ${notaFinal.toFixed(2)}. Asistencia: ${this.asistencia}%`
                        : `Reprobado. Nota final: ${notaFinal.toFixed(2)}. Asistencia: ${this.asistencia}%`;
                } else {
                    this.resultado = 'Por favor, corrija los valores de las notas para que sean entre 10 y 70.';
                }
            },
            validarEmail() {
                const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                this.errores.email = !emailPattern.test(this.registro.email);
            },
            validarPassword() {
                this.errores.password = this.registro.password !== this.registro.confirmPassword;
            },
            registrarUsuario() {
                if (!this.errores.email && !this.errores.password) {
                    alert('Registro realizado correctamente.');
                } else {
                    alert('Por favor, corrija los errores antes de enviar.');
                }
            },
            buscar() {
                alert(`Buscando: ${this.search}`);
            }
        }
    });
