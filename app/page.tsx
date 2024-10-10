"use client"; // Indique que ce composant doit être rendu côté client

import { useState } from 'react'; // Importation de useState pour gérer l'état local
import aliments from '../data/foods'; // Importation de la liste des aliments depuis le fichier de données

// Interface pour définir la structure des informations nutritionnelles
interface NutritionInfo {
    calories: number; // Nombre de calories
    proteins: number; // Quantité de protéines
    carbohydrates: number; // Quantité de glucides
    fats: number; // Quantité de lipides
}

// Définition du composant principal de la page
export default function Page() {
    // Déclaration des états locaux
    const [searchTerm, setSearchTerm] = useState<string>(''); // État pour le terme de recherche
    const [selectedFood, setSelectedFood] = useState<string | null>(null); // État pour l'aliment sélectionné
    const [grammage, setGrammage] = useState<number>(100); // État pour le grammage de l'aliment
    const [nutritionInfo, setNutritionInfo] = useState<NutritionInfo | null>(null); // État pour les informations nutritionnelles

    // Filtrer les aliments en fonction du terme de recherche
    const filteredFoods = aliments.filter(food =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase()) // Vérifie si le nom de l'aliment contient le terme de recherche
    );

    // Fonction pour sélectionner un aliment
    const handleSelectFood = (food: string) => {
        setSelectedFood(food); // Met à jour l'aliment sélectionné
        setNutritionInfo(null); // Réinitialise les informations nutritionnelles
    };

    // Fonction pour calculer les informations nutritionnelles
    const handleCalculateNutrition = () => {
        if (selectedFood) {
            const foodData = aliments.find(food => food.name === selectedFood); // Trouve les données de l'aliment sélectionné
            if (foodData) {
                const factor = grammage / 100; // Calcule le facteur basé sur le grammage
                const info: NutritionInfo = {
                    calories: foodData.nutrition.calories * factor, // Calcule les calories
                    proteins: foodData.nutrition.proteins * factor, // Calcule les protéines
                    carbohydrates: foodData.nutrition.carbohydrates * factor, // Calcule les glucides
                    fats: foodData.nutrition.fats * factor, // Calcule les lipides
                };
                setNutritionInfo(info); // Met à jour les informations nutritionnelles
            }
        }
    };

    // Rendu du composant
    return (
        <div className="max-w-2xl mx-auto p-4"> {/* Conteneur principal */}
            <h1 className="text-2xl font-bold mb-4">Recherche d'aliments</h1> {/* Titre de la page */}
            <input
                type="text"
                placeholder="Rechercher un aliment" // Indique à l'utilisateur ce qu'il doit faire
                value={searchTerm} // Valeur du champ de recherche
                onChange={(e) => {
                    setSearchTerm(e.target.value); // Met à jour le terme de recherche
                    setSelectedFood(null); // Réinitialise la sélection à chaque changement
                }}
                className="border border-gray-300 rounded p-2 mb-4 w-full" // Styles CSS
            />
            {searchTerm && filteredFoods.length > 0 && ( // Affiche la liste des aliments si le terme de recherche n'est pas vide et qu'il y a des résultats
                <ul className="border border-gray-300 rounded mb-4">
                    {filteredFoods.map(food => ( // Parcourt les aliments filtrés
                        <li 
                            key={food.id} // Clé unique pour chaque élément de la liste
                            onClick={() => handleSelectFood(food.name)} // Sélectionne l'aliment au clic
                            className="p-2 hover:bg-gray-200 cursor-pointer" // Styles CSS
                        >
                            {food.name} {/* Affiche le nom de l'aliment */}
                        </li>
                    ))}
                </ul>
            )}
            {selectedFood ? ( // Si un aliment est sélectionné
                <div className="border border-gray-300 rounded p-4">
                    <p className="font-semibold">Aliment sélectionné : {selectedFood}</p> {/* Affiche l'aliment sélectionné */}
                    <input
                        type="number"
                        value={grammage} // Valeur du grammage
                        onChange={(e) => setGrammage(Number(e.target.value))} // Met à jour le grammage
                        className="border border-gray-300 rounded p-2 mb-2 w-full" // Styles CSS
                    />
                    <button 
                        onClick={handleCalculateNutrition} // Calcule les informations nutritionnelles au clic
                        className="bg-blue-500 text-white rounded p-2 w-full" // Styles CSS
                    >
                        Calculer
                    </button>
                    {nutritionInfo && ( // Si des informations nutritionnelles sont disponibles
                        <div className="mt-4">
                            <p>Calories : {nutritionInfo.calories}</p> {/* Affiche les calories */}
                            <p>Protéines : {nutritionInfo.proteins}</p> {/* Affiche les protéines */}
                            <p>Glucides : {nutritionInfo.carbohydrates}</p> {/* Affiche les glucides */}
                            <p>Lipides : {nutritionInfo.fats}</p> {/* Affiche les lipides */}
                        </div>
                    )}
                </div>
            ) : (
                <p className="mt-4">Vous devez chercher un aliment grâce à la barre de recherche ci-dessus.</p> // Message d'instruction
            )}
        </div>
    );
}
