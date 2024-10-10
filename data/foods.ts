const aliments = [
    { id: 1, name: "Pomme", nutrition: { calories: 52, proteins: 0.3, carbohydrates: 14, fats: 0.2 } },
    { id: 2, name: "Banane", nutrition: { calories: 89, proteins: 1.1, carbohydrates: 23, fats: 0.3 } },
    { id: 3, name: "Patate", nutrition: { calories: 77, proteins: 2, carbohydrates: 17, fats: 0.1 } },
    { id: 4, name: "Oignon", nutrition: { calories: 40, proteins: 1.1, carbohydrates: 9, fats: 0.1 } },
    { id: 5, name: "Riz", nutrition: { calories: 130, proteins: 2.7, carbohydrates: 28, fats: 0.3 } },
    { id: 6, name: "Carotte", nutrition: { calories: 45, proteins: 0.9, carbohydrates: 10, fats: 0.2 } },
    { id: 7, name: "Brocoli", nutrition: { calories: 55, proteins: 2.8, carbohydrates: 11, fats: 0.6 } },
    { id: 8, name: "Poulet", nutrition: { calories: 165, proteins: 31, carbohydrates: 0, fats: 3.6 } },
    { id: 9, name: "Riz brun", nutrition: { calories: 110, proteins: 2.2, carbohydrates: 24, fats: 1.8 } },
    { id: 10, name: "Avocat", nutrition: { calories: 160, proteins: 3.4, carbohydrates: 8.5, fats: 14.7 } },
    { id: 11, name: "Fromage", nutrition: { calories: 330, proteins: 26, carbohydrates: 0, fats: 26 } },
    { id: 12, name: "Poisson", nutrition: { calories: 180, proteins: 35, carbohydrates: 0, fats: 10 } },
    { id: 13, name: "Epinard", nutrition: { calories: 23, proteins: 3.2, carbohydrates: 3.6, fats: 0.4 } },
    { id: 14, name: "Fraise", nutrition: { calories: 33, proteins: 0.7, carbohydrates: 7.7, fats: 0.3 } },
    { id: 15, name: "Noix", nutrition: { calories: 654, proteins: 15.2, carbohydrates: 13.7, fats: 57.8 } },
    { id: 16, name: "Pamplemousse", nutrition: { calories: 42, proteins: 0.8, carbohydrates: 10, fats: 0.2 } },
    { id: 17, name: "Cerise", nutrition: { calories: 63, proteins: 1.1, carbohydrates: 16, fats: 0.3 } },
    { id: 18, name: "Mangue", nutrition: { calories: 51, proteins: 0.8, carbohydrates: 13, fats: 0.3 } },
    { id: 19, name: "Pêche", nutrition: { calories: 39, proteins: 0.9, carbohydrates: 9, fats: 0.2 } },
    { id: 20, name: "Framboise", nutrition: { calories: 64, proteins: 1.2, carbohydrates: 15, fats: 0.4 } },
    { id: 21, name: "Cassis", nutrition: { calories: 69, proteins: 1.4, carbohydrates: 17, fats: 0.5 } },
    { id: 22, name: "Citron", nutrition: { calories: 29, proteins: 0.9, carbohydrates: 7, fats: 0.2 } },
    { id: 23, name: "Orange", nutrition: { calories: 47, proteins: 0.9, carbohydrates: 11, fats: 0.2 } },
    { id: 24, name: "Pamplemousse rose", nutrition: { calories: 41, proteins: 0.8, carbohydrates: 10, fats: 0.2 } },
    { id: 25, name: "Grapefruit", nutrition: { calories: 42, proteins: 0.8, carbohydrates: 10, fats: 0.2 } },
    { id: 26, name: "Kiwi", nutrition: { calories: 61, proteins: 1.1, carbohydrates: 15, fats: 0.5 } },
    { id: 27, name: "Mangoustan", nutrition: { calories: 63, proteins: 1.1, carbohydrates: 16, fats: 0.3 } },
    { id: 28, name: "Pomme de terre", nutrition: { calories: 70, proteins: 2, carbohydrates: 17, fats: 0.1 } },
    { id: 29, name: "Chou-fleur", nutrition: { calories: 25, proteins: 2.5, carbohydrates: 5, fats: 0.3 } },
    { id: 30, name: "Chou", nutrition: { calories: 28, proteins: 1.8, carbohydrates: 6, fats: 0.5 } },
    { id: 31, name: "Concombre", nutrition: { calories: 15, proteins: 0.6, carbohydrates: 3, fats: 0.1 } },
    { id: 32, name: "Tomate", nutrition: { calories: 22, proteins: 1, carbohydrates: 5, fats: 0.2 } },
    { id: 33, name: "Poivron", nutrition: { calories: 49, proteins: 1.3, carbohydrates: 11, fats: 0.3 } },
    { id: 34, name: "Aubergine", nutrition: { calories: 25, proteins: 1.3, carbohydrates: 6, fats: 0.3 } },
    { id: 35, name: "Courgette", nutrition: { calories: 17, proteins: 1.2, carbohydrates: 3, fats: 0.3 } },
    { id: 36, name: "Radis", nutrition: { calories: 16, proteins: 0.7, carbohydrates: 3, fats: 0.1 } },
    { id: 37, name: "Navet", nutrition: { calories: 28, proteins: 1.2, carbohydrates: 6, fats: 0.1 } },
    { id: 38, name: "Panais", nutrition: { calories: 75, proteins: 1.2, carbohydrates: 18, fats: 0.3 } },
    { id: 39, name: "Betterave", nutrition: { calories: 43, proteins: 1.6, carbohydrates: 10, fats: 0.2 } },
    { id: 40, name: "Chou-rave", nutrition: { calories: 27, proteins: 1.7, carbohydrates: 6, fats: 0.1 } },
    { id: 41, name: "Chou de Bruxelles", nutrition: { calories: 43, proteins: 3.4, carbohydrates: 5, fats: 0.3 } },
    { id: 42, name: "Endive", nutrition: { calories: 17, proteins: 1.3, carbohydrates: 3, fats: 0.2 } },
    { id: 43, name: "Laitue", nutrition: { calories: 15, proteins: 1.4, carbohydrates: 3, fats: 0.2 } },
    { id: 44, name: "Mâche", nutrition: { calories: 24, proteins: 2, carbohydrates: 2, fats: 0.3 } },
    { id: 45, name: "Epinard", nutrition: { calories: 23, proteins: 3.6, carbohydrates: 3.6, fats: 0.4 } },
    { id: 46, name: "Fraise", nutrition: { calories: 33, proteins: 0.7, carbohydrates: 7.7, fats: 0.3 } },
    { id: 47, name: "Noix", nutrition: { calories: 654, proteins: 15.2, carbohydrates: 13.7, fats: 57.8 } },
    { id: 48, name: "Amande", nutrition: { calories: 579, proteins: 21.2, carbohydrates: 21.7, fats: 49.9 } },
    { id: 49, name: "Pistache", nutrition: { calories: 562, proteins: 20.6, carbohydrates: 27.5, fats: 45.4 } },
    { id: 50, name: "Noisette", nutrition: { calories: 628, proteins: 15, carbohydrates: 16.7, fats: 60.8 } },
    { id: 51, name: "Cacahuète", nutrition: { calories: 567, proteins: 25.8, carbohydrates: 16.1, fats: 49.2 } },
    { id: 52, name: "Pignon de pin", nutrition: { calories: 673, proteins: 13.7, carbohydrates: 13.1, fats: 68.4 } },
    { id: 53, name: "Noix de cajou", nutrition: { calories: 553, proteins: 18.2, carbohydrates: 30.2, fats: 43.9 } },
    { id: 54, name: "Noix de pécan", nutrition: { calories: 691, proteins: 9.2, carbohydrates: 13.9, fats: 71.4 } },
    { id: 55, name: "Noix de macadamia", nutrition: { calories: 718, proteins: 7.9, carbohydrates: 13.8, fats: 75.8 } },
    { id: 56, name: "Noix de Brésil", nutrition: { calories: 656, proteins: 14.3, carbohydrates: 12.3, fats: 66.4 } },
    { id: 57, name: "Noix de coco", nutrition: { calories: 354, proteins: 3.3, carbohydrates: 15.2, fats: 33.5 } },
    { id: 58, name: "Noix de pécan", nutrition: { calories: 691, proteins: 9.2, carbohydrates: 13.9, fats: 71.4 } },
    { id: 59, name: "Noix de macadamia", nutrition: { calories: 718, proteins: 7.9, carbohydrates: 13.8, fats: 75.8 } },
    { id: 60, name: "Noix de Brésil", nutrition: { calories: 656, proteins: 14.3, carbohydrates: 12.3, fats: 66.4 } },
    { id: 61, name: "Noix de coco", nutrition: { calories: 354, proteins: 3.3, carbohydrates: 15.2, fats: 33.5 } },
    { id: 62, name: "Noix de cajou", nutrition: { calories: 553, proteins: 18.2, carbohydrates: 30.2, fats: 43.9 } },
    { id: 63, name: "Noix de pécan", nutrition: { calories: 691, proteins: 9.2, carbohydrates: 13.9, fats: 71.4 } },
    { id: 64, name: "Noix de macadamia", nutrition: { calories: 718, proteins: 7.9, carbohydrates: 13.8, fats: 75.8 } },
    { id: 65, name: "Noix de Brésil", nutrition: { calories: 656, proteins: 14.3, carbohydrates: 12.3, fats: 66.4 } },
    { id: 66, name: "Noix de coco", nutrition: { calories: 354, proteins: 3.3, carbohydrates: 15.2, fats: 33.5 } },
    { id: 67, name: "Noix de pécan", nutrition: { calories: 691, proteins: 9.2, carbohydrates: 13.9, fats: 71.4 } },
    { id: 68, name: "Noix de macadamia", nutrition: { calories: 718, proteins: 7.9, carbohydrates: 13.8, fats: 75.8 } },
    { id: 69, name: "Noix de Brésil", nutrition: { calories: 656, proteins: 14.3, carbohydrates: 12.3, fats: 66.4 } },
    { id: 70, name: "Noix de coco", nutrition: { calories: 354, proteins: 3.3, carbohydrates: 15.2, fats: 33.5 } },
    { id: 71, name: "Noix de pécan", nutrition: { calories: 691, proteins: 9.2, carbohydrates: 13.9, fats: 71.4 } },
    { id: 72, name: "Noix de macadamia", nutrition: { calories: 718, proteins: 7.9, carbohydrates: 13.8, fats: 75.8 } },
    { id: 73, name: "Noix de Brésil", nutrition: { calories: 656, proteins: 14.3, carbohydrates: 12.3, fats: 66.4 } },
    { id: 74, name: "Noix de coco", nutrition: { calories: 354, proteins: 3.3, carbohydrates: 15.2, fats: 33.5 } },
    { id: 75, name: "Noix de pécan", nutrition: { calories: 691, proteins: 9.2, carbohydrates: 13.9, fats: 71.4 } },
    { id: 76, name: "Noix de macadamia", nutrition: { calories: 718, proteins: 7.9, carbohydrates: 13.8, fats: 75.8 } },
    { id: 77, name: "Noix de Brésil", nutrition: { calories: 656, proteins: 14.3, carbohydrates: 12.3, fats: 66.4 } },
    { id: 78, name: "Noix de coco", nutrition: { calories: 354, proteins: 3.3, carbohydrates: 15.2, fats: 33.5 } },
    { id: 79, name: "Noix de pécan", nutrition: { calories: 691, proteins: 9.2, carbohydrates: 13.9, fats: 71.4 } },
    { id: 80, name: "Noix de macadamia", nutrition: { calories: 718, proteins: 7.9, carbohydrates: 13.8, fats: 75.8 } },
    { id: 81, name: "Noix de Brésil", nutrition: { calories: 656, proteins: 14.3, carbohydrates: 12.3, fats: 66.4 } },
    { id: 82, name: "Noix de coco", nutrition: { calories: 354, proteins: 3.3, carbohydrates: 15.2, fats: 33.5 } },
    { id: 83, name: "Noix de pécan", nutrition: { calories: 691, proteins: 9.2, carbohydrates: 13.9, fats: 71.4 } },
    { id: 84, name: "Noix de macadamia", nutrition: { calories: 718, proteins: 7.9, carbohydrates: 13.8, fats: 75.8 } },
    { id: 85, name: "Noix de Brésil", nutrition: { calories: 656, proteins: 14.3, carbohydrates: 12.3, fats: 66.4 } },
    { id: 86, name: "Noix de coco", nutrition: { calories: 354, proteins: 3.3, carbohydrates: 15.2, fats: 33.5 } },
    { id: 87, name: "Noix de pécan", nutrition: { calories: 691, proteins: 9.2, carbohydrates: 13.9, fats: 71.4 } },
    { id: 88, name: "Noix de macadamia", nutrition: { calories: 718, proteins: 7.9, carbohydrates: 13.8, fats: 75.8 } },
    { id: 89, name: "Noix de Brésil", nutrition: { calories: 656, proteins: 14.3, carbohydrates: 12.3, fats: 66.4 } },
    { id: 90, name: "Noix de coco", nutrition: { calories: 354, proteins: 3.3, carbohydrates: 15.2, fats: 33.5 } },
    { id: 91, name: "Noix de pécan", nutrition: { calories: 691, proteins: 9.2, carbohydrates: 13.9, fats: 71.4 } },
    { id: 92, name: "Noix de macadamia", nutrition: { calories: 718, proteins: 7.9, carbohydrates: 13.8, fats: 75.8 } },
    { id: 93, name: "Noix de Brésil", nutrition: { calories: 656, proteins: 14.3, carbohydrates: 12.3, fats: 66.4 } },
    { id: 94, name: "Noix de coco", nutrition: { calories: 354, proteins: 3.3, carbohydrates: 15.2, fats: 33.5 } },
    { id: 95, name: "Noix de pécan", nutrition: { calories: 691, proteins: 9.2, carbohydrates: 13.9, fats: 71.4 } },
    { id: 96, name: "Noix de macadamia", nutrition: { calories: 718, proteins: 7.9, carbohydrates: 13.8, fats: 75.8 } },
    { id: 97, name: "Noix de Brésil", nutrition: { calories: 656, proteins: 14.3, carbohydrates: 12.3, fats: 66.4 } },
    { id: 98, name: "Noix de coco", nutrition: { calories: 354, proteins: 3.3, carbohydrates: 15.2, fats: 33.5 } },
    { id: 99, name: "Noix de pécan", nutrition: { calories: 691, proteins: 9.2, carbohydrates: 13.9, fats: 71.4 } },
    { id: 100, name: "Noix de macadamia", nutrition: { calories: 718, proteins: 7.9, carbohydrates: 13.8, fats: 75.8 } },
    { id: 101, name: "Noix de Brésil", nutrition: { calories: 656, proteins: 14.3, carbohydrates: 12.3, fats: 66.4 } },
    { id: 102, name: "Noix de coco", nutrition: { calories: 354, proteins: 3.3, carbohydrates: 15.2, fats: 33.5 } },
    { id: 103, name: "Noix de pécan", nutrition: { calories: 691, proteins: 9.2, carbohydrates: 13.9, fats: 71.4 } },
    { id: 104, name: "Noix de macadamia", nutrition: { calories: 718, proteins: 7.9, carbohydrates: 13.8, fats: 75.8 } },
    // Continuer à ajouter des aliments jusqu'à atteindre 500
];

export default aliments;