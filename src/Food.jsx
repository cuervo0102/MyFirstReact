function Food() {
    const food1 = prompt('Enter your favorite food');
    const food2 = prompt('Enter your favorite food');
    
    return (
        <div>
            <p>First fav food: {food1}</p>
            <p>Second fav food: {food2}</p>
        </div>
    );
}

export default Food;
