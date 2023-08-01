class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
      this.ISBN = ISBN;
      this.titulo = titulo;
      this.autor = autor;
      this.numPaginas = numPaginas;
    }
  
    // Métodos getter y setter para las propiedades
    getISBN() {
      return this.ISBN;
    }
  
    setISBN(ISBN) {
      this.ISBN = ISBN;
    }
  
    getTitulo() {
      return this.titulo;
    }
  
    setTitulo(titulo) {
      this.titulo = titulo;
    }
  
    getAutor() {
      return this.autor;
    }
  
    setAutor(autor) {
      this.autor = autor;
    }
  
    getNumPaginas() {
      return this.numPaginas;
    }
  
    setNumPaginas(numPaginas) {
      this.numPaginas = numPaginas;
    }
  
    mostrarLibro() {
      console.log(
        `El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.`
      );
    }
  }
  
  let libro1 = new Libro("9780142424179", "1984", "George Orwell", 328);
  let libro2 = new Libro("9780062561022", "El Gran Gatsby", "F. Scott Fitzgerald", 180);
  
  libro1.mostrarLibro();
  libro2.mostrarLibro();
  
  if (libro1.getNumPaginas() > libro2.getNumPaginas()) {
    console.log(`El libro "${libro1.getTitulo()}" tiene más páginas.`);
  } else if (libro1.getNumPaginas() < libro2.getNumPaginas()) {
    console.log(`El libro "${libro2.getTitulo()}" tiene más páginas.`);
  } else {
    console.log("Ambos libros tienen la misma cantidad de páginas.");
  }