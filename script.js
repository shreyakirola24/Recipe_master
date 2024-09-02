document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-button');
    const recipeForm = document.getElementById('recipe-form');
    const recipesContainer = document.getElementById('recipe-list');
    const toggleRecipeFormButton = document.getElementById('toggle-recipe-form');

    let recipes = [
        {
                        name: 'Vegetable Stir-Fry',
                        category: 'Breakfast',
                        image: 'https://media.istockphoto.com/id/588595864/photo/steaming-mixed-vegetables-in-the-wok-asian-style-cooking.jpg?s=612x612&w=0&k=20&c=NZWe4QUwFmEqPAwHa3s0u3Zak6JjlRm36gMgmXx8roA=',
                        ingredients: 'Broccoli, bell peppers, carrots, soy sauce, garlic, ginger, olive oil, sesame seeds',
                        instructions: '1. Heat olive oil in a pan. 2. Add minced garlic and ginger, sauté until fragrant. 3. Add chopped vegetables and stir-fry for 5-7 minutes. 4. Add soy sauce and cook for another 2 minutes. 5. Garnish with sesame seeds and serve.',
                        healthBenefits: 'Packed with vitamins, supports immune function, and aids digestion.'
                    },
                    {
                      name: 'Chia Seed Pudding',
                      category: 'Breakfast',
                      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXgchTt6KUjiX2NolS6v54e_FKQadTMlb-uw&s',
                      ingredients: '1/4 cup chia seeds, 1 cup almond milk (or any milk), 1-2 tablespoons honey or maple syrup (optional), fruits, nuts for topping',
                      instructions: '1. In a bowl, mix chia seeds, almond milk, and sweetener. 2. Stir well and refrigerate overnight. 3. In the morning, stir again and top with fruits and nuts.',
                      healthBenefits: 'High in omega-3 fatty acids, fiber, and antioxidants.'
                  },
                  {
                    name: 'Kande Pohe',
                    category: 'Breakfast',
                    image: 'https://aartimadan.com/wp-content/uploads/2020/07/Kanda-Poha-Recipe.jpg',
                    ingredients: 'Flattened rice, onions, mustard seeds, turmeric, green chilies, peanuts, coriander leaves, lemon juice, salt',
                    instructions: '1. Rinse poha and drain. 2. Heat oil, add mustard seeds and let them splutter. 3. Add sliced onions and green chilies, sauté until soft. 4. Add turmeric and peanuts, then poha. 5. Mix well, season with salt and lemon juice. 6. Garnish with coriander leaves and serve.',
                    healthBenefits: 'Light and nutritious, promotes good digestion, and boosts energy.'
                },
                {
                  name: 'Sabudana Khichdi',
                  category: 'Breakfast',
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROMw3nJ2SK1s4aafd7lbWvI7kkEPKO3e8jpQ&s',
                  ingredients: 'Sabudana (tapioca pearls), peanuts, green chilies, cumin seeds, curry leaves, lemon juice, salt, ghee',
                  instructions: '1. Soak sabudana overnight, drain excess water. 2. Heat ghee, add cumin seeds and curry leaves. 3. Add peanuts and sauté, then add green chilies. 4. Mix in sabudana, add salt and lemon juice. 5. Cook for a few minutes until pearls become translucent. Serve hot.',
                  healthBenefits: 'Rich in carbohydrates, energizing, and good for digestion.'
              },
              
                
                  {
                    name: 'Oatmeal',
                    category: 'Breakfast',
                    image: 'https://media.eggs.ca/assets/RecipePhotos/_resampled/FillWyIxMjgwIiwiNzIwIl0/Cinnamon-Oat-Pudding.jpg',
                    ingredients: '1 cup rolled oats, 2 cups water or milk, fresh fruits (banana, berries), nuts (almonds, walnuts), honey or maple syrup',
                    instructions: '1. In a saucepan, bring water or milk to a boil. 2. Add rolled oats and reduce heat. 3. Cook for 5-7 minutes, stirring occasionally. 4. Remove from heat and let sit for a minute. 5. Top with fruits, nuts, and a drizzle of honey or syrup.',
                    healthBenefits: 'Rich in fiber, aids digestion, and helps maintain heart health.'
                },
                
                    {
                      name: 'Dubuk (Lentil Soup)',
                      category: 'Lunch',
                      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWoo39VMHhA6IegI-ju_NBsz6zVgp__fwAA&sc',
                      ingredients: 'Gahat dal (horse gram), turmeric, garlic, ginger, cumin seeds, coriander powder, mustard oil, water, salt',
                      instructions: '1. Soak gahat dal overnight. 2. Grind into a coarse paste. 3. Heat mustard oil, add cumin seeds, turmeric, garlic, and ginger. 4. Add dal paste and water, simmer until cooked. 5. Season with coriander powder and salt. 6. Serve hot with rice.',
                      healthBenefits: 'High in protein, aids in digestion, and supports heart health.'
                  },
                  {
                    name: 'Aloo Ke Gutke (Spicy Fried Potatoes)',
                    category: 'Breakfast',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRo0NQsxN-PXVTZH1r1SxcwLFCjMLEVMnXyg&s',
                    ingredients: 'Potatoes, cumin seeds, mustard seeds, turmeric, red chili powder, coriander powder, mustard oil, salt',
                    instructions: '1. Boil and peel potatoes, cut into cubes. 2. Heat mustard oil, add cumin and mustard seeds. 3. Add turmeric, red chili powder, and coriander powder. 4. Add potatoes, sauté until crispy. 5. Season with salt and serve hot.',
                    healthBenefits: 'Provides energy, rich in vitamin C, and supports digestion.'
                },{
                  name: 'Singori (Sweet Wrapped in Leaf)',
                  category: 'Dessert',
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWPlOt38knrc50wKz5lYA5ULYc0OITCI2Njg&s',
                  ingredients: 'Khoa (thickened milk), sugar, coconut, leaf wraps',
                  instructions: '1. Mix khoa and sugar in a pan, cook until thickened. 2. Add grated coconut and mix well. 3. Place a spoonful of the mixture on a leaf, fold the leaf to enclose the filling. 4. Allow to set, then serve.',
                  healthBenefits: 'Rich in calcium and protein, provides energy, and is a natural sweet treat.'
              },
              {
                name: 'Sprouted Moong Salad',
                category: 'Breakfast',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOXjofqnkIar5cOZBcfwv2t0UvkkwehgfVow&s',
                ingredients: 'Sprouted moong beans, tomatoes, onions, cucumber, coriander leaves, lemon juice, salt, pepper',
                instructions: '1. In a bowl, combine sprouted moong, chopped tomatoes, onions, and cucumber. 2. Add chopped coriander leaves, lemon juice, salt, and pepper. 3. Mix well and serve fresh.',
                healthBenefits: 'High in protein, aids digestion, and rich in vitamins.'
              },
              {
                name: 'Sprouted Moong Khichdi',
                category: 'Lunch',
                image: 'https://mummyrecipes.in/wp-content/uploads/2020/04/Instant-Ramen-Smackdown_-1-500x375.png',
                ingredients: 'Sprouted moong, rice, turmeric powder, cumin seeds, ginger, green chilies, salt, ghee',
                instructions: '1. In a pressure cooker, heat ghee and add cumin seeds. 2. Add ginger and green chilies, sauté for a minute. 3. Add sprouted moong and rice, turmeric, and salt. 4. Add water and cook for 2-3 whistles. 5. Serve hot with yogurt.',
                healthBenefits: 'High in protein, easy to digest, and provides energy.'
              },
              
              
              {
                name: 'Chudkani (Black Soybean Soup)',
                category: 'Lunch',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHBP-_L9E4ggfCJpf9PDRdZ0fyiWpkwoiokg&s',
                ingredients: 'Black soybeans, garlic, ginger, cumin seeds, turmeric, coriander powder, mustard oil, water, salt',
                instructions: '1. Soak black soybeans overnight. 2. Cook until tender. 3. Heat mustard oil, add cumin seeds, garlic, and ginger. 4. Add turmeric, coriander powder, and cooked soybeans. 5. Add water, simmer until thickened. 6. Season with salt and serve hot.',
                healthBenefits: 'High in protein, supports heart health, and rich in antioxidants.'
              },
              {
                name: 'Mandua Ki Roti (Finger Millet Flatbread)',
                category: 'Dinner',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRivqSeMTkcGfQEzS-9VSS1dFapS0XLiP3Udw&s',
                ingredients: 'Mandua (finger millet) flour, water, salt, ghee',
                instructions: '1. Mix mandua flour with water and salt to make a dough. 2. Roll out the dough into flatbreads. 3. Cook on a hot griddle until both sides are golden brown. 4. Serve hot with ghee.',
                healthBenefits: 'High in calcium, helps in managing diabetes, and supports bone health.'
              }, 
              {
                name: 'Gahat Ka Paratha (Horse Gram Flatbread)',
                category: 'Breakfast',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRig086h84uiFEOL3uxrb8iAGUUtBGN4JLTbw&s',
                ingredients: 'Gahat dal (horse gram), whole wheat flour, garlic, ginger, green chilies, ghee, salt',
                instructions: '1. Soak gahat dal overnight and grind into a coarse paste. 2. Mix with garlic, ginger, and green chilies. 3. Knead whole wheat flour into a dough. 4. Stuff the dough with gahat mixture, roll into parathas. 5. Cook on a hot griddle with ghee until golden brown. 6. Serve hot with yogurt.',
                healthBenefits: 'High in protein, supports muscle health, and aids in weight management.'
              },
              {
                name: 'Rajma',
                category: 'Lunch',
                image: 'https://shwetainthekitchen.com/wp-content/uploads/2020/12/Rajma-Masala-480x270.jpg',
                ingredients: 'Kidney beans, onion, tomatoes, ginger, garlic, cumin seeds, coriander powder, turmeric powder, garam masala, salt, oil',
                instructions: '1. Soak kidney beans overnight, then pressure cook until soft. 2. Heat oil in a pot, add cumin seeds, and let them splutter. 3. Add chopped onions, sauté until golden. 4. Add ginger and garlic, cook for 1 minute. 5. Stir in tomatoes, turmeric, coriander powder, and salt; cook until tomatoes soften. 6. Add cooked beans and some water, simmer for 15-20 minutes. 7. Sprinkle garam masala and serve with rice.',
                healthBenefits: 'High in protein and fiber, supports heart health and aids digestion.'
              },
              
              {
                name: 'Palak Paneer',
                category: 'Dinner',
                image: 'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/styles/recipes_1200_800_fallback/public/2023-09/palak-paneer.jpg?itok=ngMjn4i5',
                ingredients: 'Spinach, paneer (cottage cheese), onion, tomato, garlic, ginger, cumin, garam masala, salt, oil',
                instructions: '1. Blanch spinach in boiling water, then puree. 2. Heat oil, sauté onions, garlic, and ginger until golden. 3. Add tomatoes and spices, cook until soft. 4. Stir in spinach puree and cubed paneer, simmer for 10 minutes. 5. Serve with roti or rice.',
                healthBenefits: 'Rich in iron, high in protein, and promotes eye health.'
              },
              {
                name: 'Lentil Curry',
                category: 'Lunch',
                image: 'https://www.skinnytaste.com/wp-content/uploads/2023/05/Lentil-Curry-7-1024x1536.jpg',
                ingredients: 'Red lentils, onion, garlic, ginger, tomatoes, coconut milk, curry powder, spinach, salt, oil',
                instructions: '1. Heat oil in a pot, add chopped onions, and sauté until soft. 2. Add minced garlic and ginger, and cook for 1 minute. 3. Stir in diced tomatoes and curry powder, and cook for 2-3 minutes. 4. Add lentils, coconut milk, and water, and bring to a boil. 5. Simmer for 20-25 minutes until lentils are tender. 6. Stir in spinach, season with salt, and serve with rice or bread.',
                healthBenefits: 'High in protein and fiber, supports heart health and aids digestion.'
              },
              {
                name: 'Chaulai Ke Laddu',
                category: 'Snacks',
                image: 'https://images.tv9hindi.com/wp-content/uploads/2022/10/Cholai-ke-ladoo.jpg',
                ingredients: 'Amaranth seeds, jaggery, ghee, cardamom powder, nuts (optional)',
                instructions: '1. Dry roast amaranth seeds until they puff up. 2. In a pan, melt ghee and add jaggery; stir until it dissolves. 3. Add roasted seeds and cardamom powder; mix well. 4. Once cool enough to handle, shape into small laddus. 5. Let them cool completely before serving.',
                healthBenefits: 'Rich in protein, gluten-free, and supports bone health.'
              },
              {
                name: 'Roasted Masoor Dal',
                category: 'Snacks',
                image: 'https://i.ytimg.com/vi/G9p32UotWk8/maxresdefault.jpg',
                ingredients: 'Masoor dal, olive oil, spices (cumin, chili powder, salt)',
                instructions: '1. Dry roast masoor dal in a pan until golden brown. 2. Add olive oil and spices, mix well. 3. Let it cool and store in an airtight container. 4. Enjoy as a crunchy snack.',
                healthBenefits: 'High in protein, fiber, and iron; promotes healthy digestion and heart health.'
              },
              
              {
                name: 'Kumarit (Spiced Roasted Corn)',
                category: 'Snacks',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQqh5v3mH8yehZKLdlgcFZY-Rq8A4lPTcCCQ&s',
                ingredients: 'Fresh corn, lemon juice, black salt, red chili powder, chopped coriander leaves',
                instructions: '1. Boil the corn until tender. 2. In a bowl, mix boiled corn, lemon juice, black salt, and red chili powder. 3. Garnish with chopped coriander leaves. 4. Serve warm or chilled as a snack.',
                healthBenefits: 'Rich in fiber, supports heart health, and aids digestion.'
              },
              {
                name: 'Bael Juice',
                category: 'Snacks',
                image: 'https://www.livofy.com/health/wp-content/uploads/2023/06/Untitled-design-1-1-1024x576.png',
                ingredients: 'Bael fruit (wood apple), water, jaggery or sugar (optional)',
                instructions: '1. Scoop the pulp from the bael fruit. 2. Blend with water until smooth. 3. Strain to extract juice. 4. Sweeten with jaggery or sugar if desired. 5. Serve chilled.',
                healthBenefits: 'Rich in fiber, aids digestion, boosts immunity, and helps in detoxification.'
              },
              {
                name: 'Buransh Juice',
                category: 'Snacks',
                image: 'https://dukaan.b-cdn.net/700x700/webp/6290979/6dd42768-c8a6-4709-9056-cfcb5f40e575/buransh-juice-pic-27b34c96-369e-4a0e-a349-3b7189033d36.jpg',
                ingredients: 'Buransh flowers (Rhododendron), water, sugar or honey (to taste), lemon juice (optional)',
                instructions: '1. Wash the Buransh flowers thoroughly. 2. Boil the flowers in water for about 10-15 minutes. 3. Strain the mixture to extract the juice. 4. Add sugar or honey to taste and mix well. 5. Optionally, add lemon juice for a tangy flavor. 6. Serve chilled or at room temperature.',
                healthBenefits: 'Rich in antioxidants, helps in improving digestion, boosts immunity, and has anti-inflammatory properties.'
              },
              {
                name: 'Mixed Vegetable Curry',
                category: 'Dinner',
                image: 'https://shwetainthekitchen.com/wp-content/uploads/2023/03/mixed-vegetable-curry.jpg',
                ingredients: 'Carrots, peas, potatoes, bell peppers, onion, tomatoes, ginger, garlic, cumin seeds, turmeric, garam masala, salt, oil',
                instructions: '1. Heat oil in a pan and add cumin seeds. 2. Add chopped onions, ginger, and garlic; sauté until golden. 3. Add chopped tomatoes and cook until soft. 4. Add chopped vegetables, turmeric, garam masala, and salt. 5. Add water, cover, and simmer until vegetables are tender. 6. Serve hot with rice or roti.',
                healthBenefits: 'Packed with vitamins and minerals, supports heart health, and aids digestion.'
              },
              {
                name: 'Amaranth Leaves Stir-Fry',
                category: 'Dinner',
                image: 'https://images.saymedia-content.com/.image/t_share/MTc0NDI3ODE3MTQ3MTE1MTQy/how-to-make-red-amaranth-leaves-kempu-harive-garlic-stir-fry.jpg',
                ingredients: 'Amaranth leaves, onion, tomato, green chili, garlic, cumin seeds, turmeric powder, salt, oil',
                instructions: '1. Wash and chop the amaranth leaves. 2. Heat oil in a pan, add cumin seeds, and let them splutter. 3. Add chopped onions and sauté until golden brown. 4. Add minced garlic and green chili; sauté for a minute. 5. Add chopped tomatoes, turmeric powder, and salt; cook until tomatoes are soft. 6. Add the amaranth leaves and stir-fry until wilted. 7. Serve hot with roti or rice.',
                healthBenefits: 'Rich in iron and vitamins, supports bone health, and boosts immunity.'
              },
              
              {
                name: 'Amla Juice',
                category: 'Snacks',
                image: 'https://www.srisritattva.com/cdn/shop/articles/12-health-benefits-of-amla-juice_-_Sri-Sri-Tattva.png?v=1708582005',
                ingredients: 'Amla (Indian gooseberry), water, honey (optional), lemon juice',
                instructions: '1. Wash and chop amla. 2. Blend with water until smooth. 3. Strain to extract juice. 4. Add honey and lemon juice to taste. 5. Serve chilled.',
                healthBenefits: 'Rich in vitamin C, boosts immunity, promotes healthy skin, and aids digestion.'
              },
              
              
              
              {
                name: 'Mixed Nuts and Seeds',
                category: 'Snacks',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVaz6UfTtbvikPQa6muw_IlZzwaedJb_2R6g&s',
                ingredients: 'Almonds, walnuts, pumpkin seeds, sunflower seeds, salt, spices (optional)',
                instructions: '1. Mix all nuts and seeds in a bowl. 2. Lightly toast them in a pan if desired. 3. Add salt and spices to taste. 4. Store in an airtight container and enjoy as a healthy snack.',
                healthBenefits: 'High in healthy fats, protein, and antioxidants, promotes heart health, and boosts energy.'
              },
              
              
              
              
              {
                name: 'Gur ka Halwa (Jaggery Pudding)',
                category: 'Dessert',
                image: 'https://img-global.cpcdn.com/recipes/195a6e19805442b7/680x482cq70/amritsari-gur-ka-halwa-recipe-main-photo.jpg',
                ingredients: 'Semolina, jaggery, ghee, water, nuts, cardamom',
                instructions: '1. Heat ghee in a pan, add semolina, and roast until golden. 2. In another pan, dissolve jaggery in water to make a syrup. 3. Combine roasted semolina with jaggery syrup and cook until thick. 4. Add nuts and cardamom, then serve warm.',
                healthBenefits: 'Natural sweetener, rich in minerals, boosts energy levels, and aids digestion.'
              },
              
              {
                name: ' Raita (Cucumber Yogurt Dip)',
                category: 'Dinner',
                image: 'https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-pahadi-kheere-ka-raita.jpg',
                ingredients: 'Cucumber, yogurt, mustard seeds, green chilies, turmeric, salt',
                instructions: '1. Grate cucumber and mix with yogurt. 2. In a pan, heat mustard seeds until they crackle. 3. Add turmeric and green chilies, sauté for a minute. 4. Add the tempered spices to the yogurt mixture. 5. Season with salt and serve chilled.',
                healthBenefits: 'Cooling and digestive aid, rich in probiotics, and hydrates the body.'
              },
              {
                name: 'Quinoa Salad',
                category: 'Breakfast',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzhPnq-CxCQK6ZhphkvPiqdRZ3jSoK1IJJKw&s',
                ingredients: 'Quinoa, cherry tomatoes, cucumber, feta cheese, olive oil, lemon juice, salt, pepper',
                instructions: '1. Cook quinoa as per package instructions. 2. Let it cool. 3. Combine with chopped tomatoes, cucumber, and feta cheese. 4. Dress with olive oil, lemon juice, salt, and pepper. 5. Serve chilled.',
                healthBenefits: 'High in protein, rich in antioxidants, and supports weight loss.'
              },
                    {
                        name: 'Greek Yogurt Smoothie',
                        category: 'Snacks',
                        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsrkqjiee7DL7Fc3XtpBX1Ym0CMYqxG9FZWA&s',
                        ingredients: 'Greek yogurt, honey, strawberries, banana, ice cubes',
                        instructions: '1. Combine Greek yogurt, honey, strawberries, and banana in a blender. 2. Add ice cubes and blend until smooth. 3. Pour into glasses and serve immediately.',
                        healthBenefits: 'Rich in probiotics, promotes gut health, and provides a good source of protein.'
                    }
    ];

    function renderRecipes(category) {
        recipesContainer.innerHTML = '';
        const filteredRecipes = recipes.filter(recipe => recipe.category === category);

        if (filteredRecipes.length === 0) {
            recipesContainer.innerHTML = '<p>No recipes found in this category.</p>';
        } else {
            filteredRecipes.forEach(recipe => {
                const recipeCard = document.createElement('div');
                recipeCard.classList.add('recipe-card');
                recipeCard.innerHTML = `
                    <img src="${recipe.image}" alt="${recipe.name}">
                    <h3>${recipe.name}</h3>
                    <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
                    <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                    <p><strong>Health Benefits:</strong> ${recipe.healthBenefits}</p>
                `;
                recipesContainer.appendChild(recipeCard);
            });
        }
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            renderRecipes(category);
        });
    });

    recipeForm.addEventListener('submit', event => {
        event.preventDefault();

        const newRecipe = {
            name: document.getElementById('recipe-name').value,
            category: document.getElementById('recipe-category').value,
            ingredients: document.getElementById('recipe-ingredients').value,
            instructions: document.getElementById('recipe-instructions').value,
            healthBenefits: document.getElementById('recipe-health-benefits').value,
            image: URL.createObjectURL(document.getElementById('recipe-image').files[0])
        };

        recipes.push(newRecipe);
        renderRecipes(newRecipe.category);
        recipeForm.reset();
    });

    const homeSection = document.getElementById('home-section');
    const addRecipeSection = document.getElementById('add-recipe-section');
    const feedbackSection = document.getElementById('feedback-section');
    const homeButton = document.getElementById('home-button');
    const addRecipeButton = document.getElementById('add-recipe-button');
    const feedbackButton = document.getElementById('feedback-button');

    function showSection(section) {
        homeSection.style.display = 'none';
        addRecipeSection.style.display = 'none';
        feedbackSection.style.display = 'none';

        section.style.display = 'block';
    }

    homeButton.addEventListener('click', () => {
        showSection(homeSection);
    });

    addRecipeButton.addEventListener('click', () => {
        showSection(addRecipeSection);
    });

    feedbackButton.addEventListener('click', () => {
        showSection(feedbackSection);
    });
    renderRecipes('Breakfast');
    showSection(homeSection);
});
document.addEventListener("DOMContentLoaded", () => {
    const feedbackForm = document.getElementById("feedback-form");
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", (event) => {
            event.preventDefault();
            
            // Get feedback values
            const name = document.getElementById("feedback-name").value;
            const message = document.getElementById("feedback-message").value;
            
            // Save feedback to local storage
            localStorage.setItem("feedbackName", name);
            localStorage.setItem("feedbackMessage", message);
            
            // Redirect to feedback display page
            window.location.href = "feedback-display.html";
        });
    }
});