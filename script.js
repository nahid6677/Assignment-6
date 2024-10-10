const loadCatagories = async () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => displayCatagorybtn(data.categories))
        .catch((error) => console.log('Error my code', error))
}

const displayCatagorybtn = (catagory) => {
    const BtnContainer = document.getElementById('catagory_btn_all');
    catagory.forEach((items) => {
        // console.log(items.category)
        const buttoncontainer = document.createElement('div');
        buttoncontainer.innerHTML = `
    <button id="btn-${items.id}" onclick="AsingleCatagory(${items.id})" class="btn border bg-white border-gray-300 md:text-xl font-bold"> <img class="md:w-8 w-4 h-4 md:h-8 mr-1" src="${items.category_icon}"> ${items.category} </button>
`;
        BtnContainer.appendChild(buttoncontainer)
    })
}

const allPets = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => displayAllPets(data.pets))
        .catch(error => console.log('Error My Code', error))
}

const displayAllPets = (allPets) => {
    const petsContainer = document.getElementById('all_pets_cards');
    allPets.forEach((items) => {
        // console.log(items)
        const cardContainer = document.createElement('div');
        cardContainer.classList = "border border-slate-300 rounded-xl"
        cardContainer.innerHTML = `
            <div class="card  h-[400px] shadow">
            <figure class="mx-3 mt-3  rounded-xl">
                <img
                src="${items.image}"
                class=" rounded-xl" />
            </figure>
            <div class="px-4 py-3 ">
                <div class="flex-col flex items-start justify-start gap-1">
                    <h2 class="text-xl font-bold text-start"> ${items.pet_name ? (items.pet_name.length == 0 ? `<span>Not available </span>` : `<span>${items.pet_name}</span>`) : `<span>Not available</span>`}</h2>
                    <div class="flex gap-2">
                        <img src="assets/Frame1.png" alt="">
                        <h3 class="">Breed: ${items.breed ? (items.breed.length == 0 ? `<span>Not available </span>` : `<span>${items.breed}</span>`) : `<span>Not available</span>`}</h3>
                    </div>
                    <div class="flex gap-2">
                        <img src="assets/Frame2.png" alt="">
                        <h3 class="">Birth: ${items.date_of_birth ? (items.date_of_birth.length == 0 ? `<span>Not available </span>` : `<span>${items.date_of_birth}</span>`) : `<span>Not available</span>`}</h3>
                    </div>
                    <div class="flex gap-2">
                        <img src="assets/Frame3.png" alt="">
                        <h3 class="">Gender: ${items.gender ? (items.gender.length == 0 ? `<span>Not available </span>` : `<span>${items.gender}</span>`) : `<span>Not available</span>`} </h3>
                    </div>
                    <div class="flex gap-2">
                        <img src="assets/Frame4.png" alt="">
                        <h3 class="">Price: ${items.price ? (items.price.length == 0 ? `<span>Not available </span>` : `<span>${items.price}</span>`) : `<span>Not available</span>`}</h3>
                    </div>
                </div>
                <div class="card-actions flex justify-center gap-5 mt-3">
                    <button onclick="like(${items.petId})" id="${items.petId}" class="btn border-gray-300 bg-white"><img src="assets/like.png" alt=""></button>
                    <button onclick="adopFunction(${items.petId})" id="" class="btn border-gray-300 text-emerald-600 bg-white">Adopt</button>
                    <button onclick="detail(${items.petId})" id="" class="btn border-gray-300 text-emerald-600 bg-white">Details</button>
                </div>
            </div>
        </div>
        `;

        petsContainer.appendChild(cardContainer);
    })
}

const AsingleCatagory = (name) => {
    if (name == '1') {
        //1 is cat 
        const petsContainer = document.getElementById('all_pets_cards');
        petsContainer.innerHTML = ''

        const allCat = () => {
            fetch('https://openapi.programming-hero.com/api/peddy/category/cat')
                .then(res => res.json())
                .then(data => {
                    if (data.data.length == false) {
                        alert('No data avilable.')
                    }
                    else {
                        petsContainer.classList.add('grid');
                        visite(data.data)
                    }
                })
                .catch(error => console.log('Error My Code', error))
        }
        allCat()
    }
    if (name == '2') {
        // 2 is dog
        const petsContainer = document.getElementById('all_pets_cards');
        petsContainer.innerHTML = ''
        const allDog = () => {
            fetch('https://openapi.programming-hero.com/api/peddy/category/dog')
                .then(res => res.json())
                .then(data => {
                    if (data.data.length == false) {
                        alert('No data avilable.')
                    }
                    else {
                        petsContainer.classList.add('grid');
                        visite(data.data)
                    }
                })
                .catch(error => console.log('Error My Code', error))
        }
        allDog()

    }
    if (name == '3') {
        // 3 is rabbit
        const petsContainer = document.getElementById('all_pets_cards');
        petsContainer.innerHTML = ''
        const allRabbit = () => {
            fetch('https://openapi.programming-hero.com/api/peddy/category/rabbit')
                .then(res => res.json())
                .then(data => {
                    if (data.data.length == false) {
                        alert('No data avilable.')
                    }
                    else {
                        petsContainer.classList.add('grid');
                        visite(data.data)
                    }
                })
                .catch(error => console.log('Error My Code', error))
        }
        allRabbit()
    }
    if (name == '4') {
        // 4 is bird
        const petsContainer = document.getElementById('all_pets_cards');
        petsContainer.innerHTML = ''
        const allBird = () => {
            fetch('https://openapi.programming-hero.com/api/peddy/category/bird')
                .then(res => res.json())
                .then(data => {
                    if (data.data.length == false) {
                        // console.log(data.data.length)
                        // alert('No data avilable.')
                        petsContainer.classList.remove('grid');
                        // petsContainer.classList = "w-full"
                        petsContainer.innerHTML = `
                            <div class="w-2/5 mx-auto  gap-3">
                                <img class="mx-auto w-2/4" src="assets/error.webp">
                                <h2 class="text-2xl py-3 font-bold text-center text-black ">No Information Available</h2>
                                <p class="text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a.</p>
                            </div>
                         `
                    }
                    else (
                        console.log('hhh')
                    )
                })
                .catch(error => console.log('Error My Code', error))
        }
        allBird()
    }
}

const like = (Inid) => {
    // console.log(Inid)
    const likeContainer = document.getElementById('likeImg');
    const singleImg = document.createElement('div');
    likeContainer.appendChild(singleImg);
    singleImg.classList = " "
    const allPetsInF = () => {
        fetch('https://openapi.programming-hero.com/api/peddy/pets')
            .then(res => res.json())
            .then(data => displayAllPetsInF(data.pets))
            .catch(error => console.log('Error My Code', error))
    }
    allPetsInF()

    const displayAllPetsInF = (allpetsData) => {
        // console.log(allpetsData)

        allpetsData.forEach((item) => {
            // console.log(item)
            if (item.petId === Inid) {
                console.log(item)
                singleImg.innerHTML = `
                    <img class="rounded" src="${item.image}" class="w-full">
                `;

            }
        })
    }
}

const adopFunction= (id) => {
    // const adopcontainer = document.getElementById('adopt');
    document.getElementById('my_modal_66').classList.remove('hidden')

    const allPetsInF = () => {
        fetch('https://openapi.programming-hero.com/api/peddy/pets')
            .then(res => res.json())
            .then(data => displaymodal(data.pets))
            .catch(error => console.log('Error My Code', error))
    }
    const displaymodal = (myData) => {
        const detailcontainer = document.getElementById('adopt');

        myData.forEach((item) => {
            // console.log(item)
            let timeLeft = 3;
            if (item.petId === id) {
                // console.log(item)
                const countdownTimer =  setInterval(() => {
                    timeLeft--;
                    detailcontainer.innerHTML = timeLeft;
                    if (timeLeft <= 0) {
                        clearInterval(countdownTimer);
                        // document.getElementById('my_modal_66').classList.add('hidden');
                        // countdownElement.textContent = "Time's up!";
                    }
                },1000)

                
                document.getElementById('my_modal_66').showModal()
            }
        })
    }
    allPetsInF()

}

const detail = (id) => {
    const allPetsInF = () => {
        fetch('https://openapi.programming-hero.com/api/peddy/pets')
            .then(res => res.json())
            .then(data => displaymodal(data.pets))
            .catch(error => console.log('Error My Code', error))
    }
    const displaymodal = (myData) => {
        const detailcontainer = document.getElementById('modal-contant');

        myData.forEach((item) => {
            // console.log(item)
            if (item.petId === id) {
                // console.log(item)
                detailcontainer.innerHTML = `
                    <div class="w-full h-full p-1 rounded ">
                        <div class="h-[45%] w-full">
                            <img class="rounded-xl w-full" src="${item.image}" alt="">
                        </div>

                        <h2 class="text-xl font-bold text-start mt-2 mb-2"> ${item.pet_name ? (item.pet_name.length == 0 ? `<span>Not available </span>` : `<span>${item.pet_name}</span>`) : `<span>Not available</span>`}</h2>

                        <div class="w-full grid grid-cols-2 pb-3 border-b">
                            <div>
                                <div class="flex gap-2">
                                    <img src="assets/Frame1.png" alt="">
                                    <h3 class="">Breed: ${item.breed ? (item.breed.length == 0 ? `<span>Not available </span>` : `<span>${item.breed}</span>`) : `<span>Not available</span>`}</h3>
                                </div>
                                <div class="flex gap-2">
                                    <img src="assets/Frame3.png" alt="">
                                    <h3 class="">Gender: ${item.gender ? (item.gender.length == 0 ? `<span>Not available </span>` : `<span>${item.gender}</span>`) : `<span>Not available</span>`} </h3>
                                </div>
                                <div class="flex gap-2">
                                    <img src="assets/Frame2.png" alt="">
                                    <h3 class="">Vaccinated status: ${item.vaccinated_status ? (item.vaccinated_status.length == 0 ? `<span>Not available </span>` : `<span>${item.vaccinated_status}</span>`) : `<span>Not available</span>`}</h3>
                                </div>
                            </div>
                            <div>
                                <div class="flex gap-2">
                                    <img src="assets/Frame2.png" alt="">
                                    <h3 class="">Birth: ${item.date_of_birth ? (item.date_of_birth.length == 0 ? `<span>Not available </span>` : `<span>${item.date_of_birth}</span>`) : `<span>Not available</span>`}</h3>
                                </div>
                                <div class="flex gap-2">
                                    <img src="assets/Frame4.png" alt="">
                                    <h3 class="">Price: ${item.price ? (item.price.length == 0 ? `<span>Not available </span>` : `<span>${item.price}</span>`) : `<span>Not available</span>`}</h3>
                                </div>
                            </div>
                        </div>

                        <h2 class="text-xl font-bold text-start mt-2 mb-2">
                            Details Information
                        </h2>
                        <p class="">${item.pet_details ? (item.pet_details.length == 0 ? `<span>Not available </span>` : `<span>${item.pet_details}</span>`) : `<span>Not available</span>`}</p>

                    </div>
                `;
                document.getElementById('my_modal_5').showModal()
            }
        })
    }
    allPetsInF()
}

loadCatagories()
allPets()


document.getElementById('sort-by-price').addEventListener('click', () => {
    const petsContainer = document.getElementById('all_pets_cards');
    petsContainer.innerHTML = '';
    const allPetsInF = () => {
        fetch('https://openapi.programming-hero.com/api/peddy/pets')
            .then(res => res.json())
            .then(data => visite(data.pets))
            .catch(error => console.log('Error My Code', error))
    }
    allPetsInF()
})
const visite = (single) => {
    // console.log(single)
    const sortArray = single.sort((a, b) => {
        if (a.price === null) return 1;
        if (b.price === null) return -1;
        return a.price - b.price;
    })
    displayAllPets(sortArray.reverse())
}

// const convertJson = async() =>{
//     const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
//     const data = await res.json(res);
//     return data.pets;
// }

document.getElementById('btnCollaps').addEventListener('click', () =>{
    hideAndShow('collaps')
    
})

function hideAndShow(id) {
    const btN = document.getElementById('btnCollaps');
    if (document.getElementById(id).classList.contains('hidden') === true) {
        document.getElementById(id).classList.remove('hidden');
        // btN.classList.remove('mt-5')

    }
    else if (document.getElementById(id).classList.contains('hidden') === false) {
        document.getElementById(id).classList.add('hidden');
        // btN.classList.add('mt-5')
    };
};

document.getElementById('jump').addEventListener('click', () =>{

    
})







































// const myArray = [{
//     "petId": 3,
//     "category": "Rabbit",
//     "date_of_birth": "2022-04-20",
//     "price": 1500,
//     "image": "https://i.ibb.co.com/s3PXSwD/pet-3.jpg",
//     "gender": "Male",
//     "pet_details": "This male African Grey rabbit is a small, friendly companion born on April 20, 2022. He prefers a calm environment and enjoys gentle handling. Partially vaccinated, he's a great choice for rabbit lovers who want a peaceful, easygoing pet. Priced at $1500, he's perfect for a quiet home environment.",
//     "vaccinated_status": "Partially",
//     "pet_name": "Coco"
// },
// {
//     "petId": 16,
//     "breed": "English Angora",
//     "category": "Rabbit",
//     "date_of_birth": "2023-08-05",
//     "price": 300,
//     "image": "https://i.ibb.co.com/zZHPJNh/pet-16.jpg",
//     "gender": "Female",
//     "pet_details": "This fluffy female English Angora rabbit, born on August 5, 2023, is known for her long, luxurious fur. Priced at $300, she's perfect for families who enjoy grooming and cuddling. She is not vaccinated.",
//     "vaccinated_status": "Not",
//     "pet_name": "Snowball"
// },{
//     "petId": 9,
//     "breed": "Beagle",
//     "category": "Dog",
//     "date_of_birth": "2023-03-22",
//     "price": null,
//     "image": "https://i.ibb.co.com/XyXBtb8/pet-9.jpg",
//     "gender": "Male",
//     "pet_details": "This male Beagle, born on March 22, 2023, is curious, playful, and great with children. Fully vaccinated and priced at $1900, he is perfect for families looking for an active, adventurous companion that loves to explore.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Buddy"
// },{
//     "petId": 7,
//     "breed": "Bengal",
//     "category": "Cat",
//     "date_of_birth": "2022-11-10",
//     "price": 950,
//     "image": "https://i.ibb.co.com/QXbXctF/pet-7.jpg",
//     "gender": "Male",
//     "pet_details": "This male Bengal cat, born on November 10, 2022, is energetic and playful. He loves exploring, climbing, and playing with interactive toys. Fully vaccinated and priced at $950, he's perfect for anyone looking for an active, intelligent, and lively cat.",
//     "vaccinated_status": null,
//     "pet_name": "Max"
// },{
//     "petId": 5,
//     "breed": "Beagle",
//     "category": "Dog",
//     "date_of_birth": null,
//     "price": 900,
//     "image": "https://i.ibb.co.com/BwnvDMY/pet-5.jpg",
//     "gender": "Female",
//     "pet_details": "This curious female Beagle was born on March 22, 2023, and loves to explore and play. She is great with kids and enjoys outdoor adventures. Fully vaccinated and priced at $900, she's perfect for an active family looking for a loyal, energetic companion.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Bella"
// }
// ]



