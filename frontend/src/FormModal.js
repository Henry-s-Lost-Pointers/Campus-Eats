import React, { useState } from "react";

function FormModal({ closeModal }) {
  const [formData, setFormData] = useState({
    // We store an array for cuisine (max 2)
    cuisine: [],
    maxCalories: "",
    minProtein: "",
    carbs: "" // Added carbs field
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "cuisine" && type === "checkbox") {
      if (checked) {
        setFormData((prev) => {
          if (prev.cuisine.length < 2) {
            return { ...prev, cuisine: [...prev.cuisine, value] };
          } else {
            // Already picked 2, ignore extra choices
            return prev;
          }
        });
      } else {
        setFormData((prev) => ({
          ...prev,
          cuisine: prev.cuisine.filter((c) => c !== value),
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent default behavior
    try {
      // First, submit form data to backend
      const response = await fetch("http://localhost:5001/submit-Form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Sending formData as-is—modify if your backend needs adjustments
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // If form submission was successful, fetch meal recommendations
        await fetchMeal();
        setFormSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error("Error submitting form:", errorData);
      }
    } catch (error) {
      console.error("Network error during form submit:", error);
    }
  };

  const handleMealFetch = async () => {
    try {
      const response = await fetch(
        "https://us-central1-studied-anchor-451016-e0.cloudfunctions.net/cluster",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // Mapping form fields to expected API parameters
          body: JSON.stringify({
            calories: formData.maxCalories,
            protein: formData.minProtein,
            carbohydrates: formData.carbs,
          }),
        }
      );

      if (!response.ok) {
        console.error("Error fetching meal data:", response.statusText);
        return [];
      }

      const result = await response.json();
      console.log("Meal Recommendations:", result);
      return result.meals || [];
    } catch (error) {
      console.error("Network error while fetching meals:", error);
      return [];
    }
  };

  const fetchMeal = async () => {
    const mealData = await handleMealFetch();
    if (mealData.length > 0) {
      console.log("Storing meals in localStorage:", mealData);
      localStorage.setItem("mealOptions", JSON.stringify(mealData));
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close" onClick={closeModal}>
          &times;
        </button>
        <h2>Meal Preferences</h2>
        {!formSubmitted ? (
          <form onSubmit={handleFormSubmit} className="preferences-form">
            <div className="form-group">
              <label>Preferred Cuisines (Pick up to 2):</label>
              <div>
                <input
                  type="checkbox"
                  id="asian"
                  name="cuisine"
                  value="asian"
                  checked={formData.cuisine.includes("asian")}
                  onChange={handleFormChange}
                />
                <label htmlFor="asian">Asian</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="indian"
                  name="cuisine"
                  value="indian"
                  checked={formData.cuisine.includes("indian")}
                  onChange={handleFormChange}
                />
                <label htmlFor="indian">Indian</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="korean"
                  name="cuisine"
                  value="korean"
                  checked={formData.cuisine.includes("korean")}
                  onChange={handleFormChange}
                />
                <label htmlFor="korean">Korean</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="italian"
                  name="cuisine"
                  value="italian"
                  checked={formData.cuisine.includes("italian")}
                  onChange={handleFormChange}
                />
                <label htmlFor="italian">Italian</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="mexican"
                  name="cuisine"
                  value="mexican"
                  checked={formData.cuisine.includes("mexican")}
                  onChange={handleFormChange}
                />
                <label htmlFor="mexican">Mexican</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="healthy"
                  name="cuisine"
                  value="healthy"
                  checked={formData.cuisine.includes("healthy")}
                  onChange={handleFormChange}
                />
                <label htmlFor="healthy">Healthy</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="greek"
                  name="cuisine"
                  value="greek"
                  checked={formData.cuisine.includes("greek")}
                  onChange={handleFormChange}
                />
                <label htmlFor="greek">Greek</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="cafe"
                  name="cuisine"
                  value="café"
                  checked={formData.cuisine.includes("café")}
                  onChange={handleFormChange}
                />
                <label htmlFor="cafe">Café</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="fastfood"
                  name="cuisine"
                  value="fast food"
                  checked={formData.cuisine.includes("fast food")}
                  onChange={handleFormChange}
                />
                <label htmlFor="fastfood">Fast Food</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="thai"
                  name="cuisine"
                  value="thai"
                  checked={formData.cuisine.includes("thai")}
                  onChange={handleFormChange}
                />
                <label htmlFor="thai">Thai</label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="maxCalories">Max Calories:</label>
              <input
                type="number"
                id="maxCalories"
                name="maxCalories"
                value={formData.maxCalories}
                onChange={handleFormChange}
                placeholder="e.g. 600"
              />
            </div>

            <div className="form-group">
              <label htmlFor="minProtein">Min Protein (g):</label>
              <input
                type="number"
                id="minProtein"
                name="minProtein"
                value={formData.minProtein}
                onChange={handleFormChange}
                placeholder="e.g. 20"
              />
            </div>

            <div className="form-group">
              <label htmlFor="carbs">Carbohydrates:</label>
              <input
                type="number"
                id="carbs"
                name="carbs"
                value={formData.carbs}
                onChange={handleFormChange}
                placeholder="e.g. 50"
              />
            </div>

            <button type="submit" className="btn submit-btn">
              Submit Preferences
            </button>
          </form>
        ) : (
          <div className="form-submitted">
            <h3>Form Submitted</h3>
            <p>Thank you for submitting your preferences</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FormModal;
