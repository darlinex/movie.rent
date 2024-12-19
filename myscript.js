class Movie {
    constructor(title, quantity) {
        this.title = title;
        this.quantity = quantity;
        this.rented = 0;
    }
}

class MovieRentingAPI {
    constructor() {
        this.movies = [];
        this.totalIncome = 0;
    }

    addMovie(title, quantity) {
        const existingMovie = this.movies.find(movie => movie.title === title);
        if (existingMovie) {
            existingMovie.quantity += quantity;
            console.log(`Added ${quantity} more copies of "${title}". Total: ${existingMovie.quantity}`);
        } else {
            const newMovie = new Movie(title, quantity);
            this.movies.push(newMovie);
            console.log(`Added "${title}" with ${quantity} copies to the store.`);
        }
    }

    checkAvailability(title) {
        const movie = this.movies.find(movie => movie.title === title);
        if (!movie) {
            console.log(`The movie "${title}" is not available in the store.`);
            return 'Not available';
        }

        if (movie.quantity > 0) {
            console.log(`The movie "${title}" is available for rent. Copies left: ${movie.quantity}`);
            return 'Available';
        } else {
            console.log(`The movie "${title}" is currently rented out. Copies left: ${movie.quantity}`);
            return 'Rented out';
        }
    }

    
    rent(title, renterName) {
        const movie = this.movies.find(movie => movie.title === title);
        if (!movie) {
            console.log(`Cannot rent. The movie "${title}" is not available in the store.`);
            return;
        }

        if (movie.quantity > 0) {
            movie.quantity--;
            movie.rented++;
            this.totalIncome += 5; 
            console.log(`"${renterName}" has rented "${title}". Copies left: ${movie.quantity}`);
            console.log(`Total income from rentals: $${this.totalIncome}`);
        } else {
            console.log(`Sorry, "${title}" is currently rented out. Please try again later.`);
        }
    }

    
    income() {
        console.log(`Total income from rentals: $${this.totalIncome}`);
        return this.totalIncome;
    }
}


const movieStore = new MovieRentingAPI();
movieStore.addMovie('Inception', 5);
movieStore.addMovie('The Matrix', 3);
movieStore.checkAvailability('Inception');
movieStore.rent('Inception', 'Alice');
movieStore.checkAvailability('Inception');
movieStore.rent('The Matrix', 'Bob');
movieStore.income();
movieStore.checkAvailability('The Matrix');
movieStore.rent('The Matrix', 'Charlie');
movieStore.checkAvailability('The Matrix');
movieStore.rent('The Matrix', 'Diana'); 
