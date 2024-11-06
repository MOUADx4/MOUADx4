"use strict";

// Products infos
const productName: string = "Sony XXX"; 
const productPrice: number = 3000;

const highRating: bigint = 15n;
const maxStock: bigint = BigInt(65); 

let isAvailable: boolean = true;
isAvailable = false;

// Interfaces
interface CameraDetails {
    name: string;
    color: string;
}

const cameraDetails: CameraDetails = {
    name: productName,
    color: "Grey",
};

interface ICamera {
    name: string;
    price: number;
    readonly stock: number;
    brand?: string; 
}

const newCamera: ICamera = {
    name: "Canon XXX",
    price: 3000,
    stock: 100,
    brand: "Canon"
};

interface SonyCamera extends ICamera {
    megapixels: number;
}

const sonyCamera: SonyCamera = {
    name: "Sony Alpha",
    price: 4000,
    stock: 50,
    megapixels: 24
};

// Products
const productList: string[] = ["Sony XXX", "Canon XXX", "Nikon XXX"];

// Tuples
let promoProduct: [string, number, bigint];


const cam: { type: string; model: string; color: string } = {
    type: "camera",
    model: "Nikon",
    color: "black",
};

console.log(cam);
console.log(typeof cam);

// Clients
const customers: string[] = ["X", "Y", "Z"];
customers.push("W");

// Classes
class CameraStore {
    // Instance Properties
    public model: string;
    protected price: number;

    // Static Properties
    public static totalCameras: number = 0;
    public static cameraModels: string[] = [];

    // Constructor
    public constructor(model: string, price: number) {
        this.model = model;
        this.price = price;
        CameraStore.totalCameras++;
        CameraStore.cameraModels.push(model); 
    }

    // Methods
    public displayCameraDetails(): void {
        console.log(`Modèle: ${this.model}, Prix: ${this.price}€`);
    }

    public static displayTotalCameras(): void {
        console.log(`Nombre total de caméras: ${CameraStore.totalCameras}`);
    }
}

const nikonStore = new CameraStore("Nikon D3500", 500);
nikonStore.displayCameraDetails(); 

CameraStore.displayTotalCameras();

// Enum 
enum CameraLaunchMonths {
    January = 1,
    February,
    March,
    April
}
let currentLaunchMonth = CameraLaunchMonths.February;

// Type
type CameraStats = string | number | { model: string; reviews: number };

let cameraStats: CameraStats = "Sony Alpha Stats";
cameraStats = 12450; 
cameraStats = { model: "Sony Alpha", reviews: 500 }; 
let uncertainValue: unknown = "Welcome to Luxe Camera!";

if (typeof uncertainValue === 'string') {
    console.log("Cette valeur est une chaîne de caractères");
} else {
    console.log("Type de valeur inconnu");
}

//Function Void
function displayWelcomeMessage(message: string): void {
    console.log("Bienvenue chez Luxe Camera!");
}


let userCameraChoice: string = "Canon";

if (userCameraChoice === "Canon") {
    console.log("L'utilisateur a choisi Canon");
}

//Alias
type CameraModel = string;

let favoriteCamera: CameraModel = "Nikon Z7";

type Customer = {
    name: string;
    age: number;
    purchasedCamera: string;
};

let customer1: Customer = {
    name: "Alice",
    age: 28,
    purchasedCamera: "Sony Alpha 7",
};

let customer2: Customer = {
    name: "Bob",
    age: 35,
    purchasedCamera: "Canon EOS R5",
};

function interactWithCamera(cameraName: string, action: string): void {
    console.log(`${action} on camera: ${cameraName}`);
}

// Fonction appel
interactWithCamera("Sony Alpha", "Viewed");
interactWithCamera("Canon EOS R5", "Purchased");

// Fonction pour afficher un message de fin après une action ou transaction
const endTransactionMessage = function (customerName: string, totalAmount: number): string {
    return `Transaction Complete\nCustomer Name: ${customerName}\nTotal Amount: ${totalAmount}€`;
};

// Appel de la fonction
console.log(endTransactionMessage("Alice", 3200));

