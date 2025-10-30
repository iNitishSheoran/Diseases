const diseases = {
  "Diabetes": {
    symptoms: "Persistent thirst, frequent urination (especially at night), constant hunger, unexplained weight loss or gain, blurry vision, numbness or tingling in hands/feet, frequent infections, slow wound healing.",
    causes: "Results from either insufficient insulin production (Type 1) or insulin resistance (Type 2). Major contributors include genetics, obesity, sedentary lifestyle, poor diet high in refined carbs, and prolonged stress.",
    treatment: "Managed via lifestyle modification (balanced diet, regular exercise), oral glucose-lowering medications or insulin therapy, and regular blood glucose monitoring. Diabetes care often includes foot care, eye checks, and management of blood pressure and cholesterol.",
    prevention: "Maintain healthy weight, eat fiber-rich whole foods, limit sugary and processed foods, stay physically active, and undergo regular screening if you have risk factors or family history."
  },

  "Hypertension": {
    symptoms: "Often called a 'silent' condition—many have no symptoms. When present, symptoms may include headaches, dizziness, shortness of breath, blurred vision, chest discomfort, or nosebleeds in severe cases.",
    causes: "Develops from long-term high arterial pressure due to excess salt intake, obesity, lack of exercise, high alcohol use, smoking, chronic stress, or kidney/hormonal disorders. Family history increases risk.",
    treatment: "Lifestyle changes (low-sodium diet, weight loss, exercise, stress reduction) plus medications such as ACE inhibitors, ARBs, beta-blockers, diuretics, or calcium channel blockers as prescribed.",
    prevention: "Reduce salt and processed food, maintain healthy weight, exercise regularly, avoid tobacco and excessive alcohol, and check blood pressure periodically."
  },

  "Asthma": {
    symptoms: "Recurrent wheeze, coughing (often worse at night), chest tightness, and shortness of breath. Symptoms can be episodic and triggered by exercise or allergens.",
    causes: "Chronic airway inflammation caused by allergens (dust mites, pollen), respiratory infections, pollution, cold air, strong odors, or exercise. Genetic predisposition often plays a role.",
    treatment: "Quick-relief inhalers (short-acting bronchodilators) for attacks and inhaled corticosteroids or other controller medications for long-term management. Allergy control and action plans reduce severe attacks.",
    prevention: "Avoid triggers (smoke, dust, strong smells), use air filters, follow prescribed inhaler regimen, get vaccinated for influenza and pneumonia, and maintain overall lung health."
  },

  "Anemia": {
    symptoms: "Persistent fatigue, pallor (pale skin), shortness of breath on exertion, dizziness, cold hands and feet, and palpitations. Severe anemia may cause fainting or chest pain.",
    causes: "Common causes include iron deficiency, vitamin B12 or folate deficiency, chronic disease (kidney disease, inflammation), and blood loss (menstruation, ulcers). Inherited forms like thalassemia exist.",
    treatment: "Treat the underlying cause: iron or vitamin supplements, dietary changes, treatment of bleeding sources, or transfusions in severe cases. Follow-up blood tests ensure recovery.",
    prevention: "Eat iron- and vitamin-rich foods (leafy greens, lean meats, pulses), treat chronic infections, avoid excessive NSAID use, and have regular screening when at risk."
  },

  "Migraine": {
    symptoms: "Intense, throbbing or pulsing headache usually on one side, often with nausea, vomiting, and sensitivity to light or sound. Some experience visual disturbance (aura) before the pain.",
    causes: "Complex neurological condition triggered by hormonal changes, stress, certain foods (aged cheese, processed meats), caffeine changes, sleep disruption, or sensory stimuli.",
    treatment: "Acute treatments include triptans and NSAIDs or antiemetics for nausea; preventive medications are used in frequent attacks. Lifestyle measures—sleep, hydration, trigger avoidance—help reduce frequency.",
    prevention: "Identify and avoid personal triggers, maintain consistent sleep and meal patterns, manage stress, and keep a headache diary to guide prevention strategies."
  },

  "COVID-19": {
    symptoms: "Fever, dry cough, sore throat, fatigue, muscle aches, loss of smell or taste, and shortness of breath in more severe cases. Symptoms range from mild to life-threatening respiratory illness.",
    causes: "Caused by SARS-CoV-2 virus transmitted mainly through respiratory droplets and aerosols. Risk increases with close indoor contact and poor ventilation.",
    treatment: "Supportive care at home for mild illness (rest, hydration, fever control); antiviral or corticosteroid therapies in moderate to severe cases as per clinical guidelines. Oxygen and hospital care for respiratory failure.",
    prevention: "Vaccination, mask use in crowded indoor settings, good hand hygiene, ensure ventilation, and isolate when symptomatic or after exposure according to local guidance."
  },

  "Malaria": {
    symptoms: "High fevers and chills, profuse sweating, headache, nausea, vomiting, muscle pain, and general weakness. Severe malaria may cause anemia, jaundice, respiratory distress, or organ failure.",
    causes: "Parasitic infection (Plasmodium species) transmitted by bites of infected Anopheles mosquitoes. Travel to or residence in endemic regions increases risk.",
    treatment: "Prompt diagnosis and antimalarial therapy (artemisinin-based combination therapies or other agents per species and resistance). Hospitalization for severe cases with supportive care.",
    prevention: "Use insecticide-treated bed nets, repellents, long sleeves, remove stagnant water, and take prophylactic antimalarials when traveling to high-risk areas."
  },

  "Tuberculosis": {
    symptoms: "Prolonged cough lasting more than three weeks, sometimes with blood-streaked sputum, fever, night sweats, chest pain, fatigue, and weight loss.",
    causes: "Airborne spread of Mycobacterium tuberculosis from infected people; risk increases with close living conditions, immunosuppression (HIV), malnutrition, or diabetes.",
    treatment: "Long-course combination antibiotics (commonly isoniazid, rifampicin, ethambutol, pyrazinamide) for at least 6 months under supervision to ensure cure and avoid resistance.",
    prevention: "Early detection and full treatment of cases, BCG vaccination in infants (where recommended), good ventilation, and infection control in healthcare and congregate settings."
  },

  "Hepatitis B": {
    symptoms: "Fatigue, nausea, abdominal pain, loss of appetite, dark urine, and yellowing of skin/eyes (jaundice). Chronic infection can silently damage the liver over years.",
    causes: "Infection with hepatitis B virus transmitted by blood and body fluids—unprotected sex, contaminated needles, or mother-to-child at birth.",
    treatment: "Acute illness is often supportive care; chronic infection may require long-term antiviral therapy (e.g., tenofovir) and liver monitoring. Severe liver disease may need transplant evaluation.",
    prevention: "Hepatitis B vaccination, safe injection practices, screening of blood products, and safe sex reduce transmission risk."
  },

  "Typhoid": {
    symptoms: "Prolonged high fever, weakness, stomach pain, headache, loss of appetite, sometimes constipation or diarrhea and rose-colored rash in some patients.",
    causes: "Ingesting Salmonella typhi bacteria via contaminated food or water; poor sanitation and unsafe food handling are common contributors.",
    treatment: "Appropriate antibiotics (based on sensitivity), hydration, rest, and nutritional support. Complications require hospitalization and close monitoring.",
    prevention: "Drink safe water, practice hand hygiene, eat well-cooked foods, avoid risky street food, and consider vaccination before travel to endemic areas."
  },

  "Dengue": {
    symptoms: "Sudden high fever, severe headache, pain behind the eyes, joint and muscle pain, skin rash, mild bleeding (gums, nose), and severe cases may develop dengue hemorrhagic fever.",
    causes: "Dengue virus transmitted by infected Aedes mosquitoes; urban areas with stagnant water and daytime-biting mosquitoes are higher risk.",
    treatment: "No specific antiviral; management focuses on careful fluid balance, paracetamol for fever and pain, and hospital care if bleeding or plasma leakage occurs.",
    prevention: "Eliminate mosquito breeding places, use repellents and nets, wear protective clothing, and community vector-control measures to reduce transmission."
  },

  "Chickenpox": {
    symptoms: "Itchy red rash that turns into fluid-filled blisters, fever, fatigue, and general malaise. Lesions appear in crops and may leave scars if scratched.",
    causes: "Varicella-zoster virus transmitted by respiratory droplets or direct contact with lesions; highly contagious, especially before lesions crust over.",
    treatment: "Supportive care with antihistamines, calamine lotion, fever control; antivirals (acyclovir) for high-risk or severe cases and adults.",
    prevention: "Varicella vaccination provides strong protection; avoid contact with infected people and maintain good hygiene."
  },

  "Pneumonia": {
    symptoms: "Cough (often productive), fever, chills, shortness of breath, chest pain when breathing, and general weakness. Severity ranges from mild to life-threatening.",
    causes: "Infection of the lung tissue by bacteria, viruses, or fungi; risk factors include age extremes, smoking, chronic lung disease, and immunosuppression.",
    treatment: "Bacterial pneumonia is treated with antibiotics; viral cases receive supportive care and antivirals if indicated. Oxygen therapy and hospitalization may be needed in severe illness.",
    prevention: "Vaccination (pneumococcal, influenza), hand hygiene, smoking cessation, and prompt treatment of respiratory infections help reduce risk."
  },

  "Arthritis": {
    symptoms: "Joint pain, swelling, stiffness (worse in the morning), reduced range of motion, and difficulty performing daily activities. Severity varies by type (osteoarthritis vs rheumatoid).",
    causes: "Osteoarthritis results from wear-and-tear of joint cartilage; rheumatoid arthritis is autoimmune. Injury, infection, genetics, and age contribute.",
    treatment: "Pain relief (acetaminophen, NSAIDs), physical therapy, disease-modifying drugs (for autoimmune types), and sometimes joint replacement surgery for severe osteoarthritis.",
    prevention: "Maintain healthy weight, regular low-impact exercise to strengthen muscles, protect joints from injury, and seek early treatment for inflammatory symptoms."
  },

  "Obesity": {
    symptoms: "Excessive body fat leading to visible overweight, reduced stamina, breathlessness on exertion, joint pain, and increased risk of sleep apnea and metabolic complications.",
    causes: "Calorie surplus relative to energy use, sedentary lifestyle, high-calorie processed foods, certain medications, hormonal imbalances, and genetic predisposition.",
    treatment: "Multimodal approach: dietary changes, increased physical activity, behavioral therapy, medical weight-loss medications when appropriate, and bariatric surgery for selected patients.",
    prevention: "Adopt balanced eating habits, regular physical activity, portion control, reduce sugary/processed foods, and monitor weight trends early."
  },

  "Cholera": {
    symptoms: "Sudden, severe watery diarrhea, vomiting, rapid dehydration, dry mouth, decreased urine output, and muscle cramps. Without quick rehydration, it can be fatal.",
    causes: "Ingestion of Vibrio cholerae bacteria through contaminated water or food; outbreaks often follow poor sanitation or natural disasters.",
    treatment: "Immediate oral rehydration salts (ORS) or IV fluids for severe dehydration; antibiotics in certain cases to shorten disease duration.",
    prevention: "Ensure access to clean water, proper sanitation, handwashing, safe food handling, and cholera vaccination in outbreak-prone areas."
  },

  "Depression": {
    symptoms: "Persistent sadness or low mood, loss of interest or pleasure, fatigue, changes in appetite or sleep, poor concentration, feelings of worthlessness, and sometimes suicidal thoughts.",
    causes: "Multifactorial: genetics, brain chemistry imbalances, prolonged stress, trauma, chronic illness, or major life changes can trigger depression.",
    treatment: "Psychotherapy (CBT, interpersonal), antidepressant medications, lifestyle measures (exercise, sleep hygiene), and social support. Severe cases may require intensive care.",
    prevention: "Early help-seeking, stress management, strong social connections, regular physical activity, and seeking therapy when needed reduce long-term risk."
  },

  "Anxiety": {
    symptoms: "Excessive and persistent worry, restlessness, heart palpitations, sweating, trembling, sleep disturbances, and difficulty concentrating. Symptoms can be physical or psychological.",
    causes: "Often triggered by chronic stress, traumatic events, genetics, substance use, or underlying medical conditions.",
    treatment: "Cognitive-behavioral therapy, relaxation and breathing techniques, structured routines, and medications (SSRIs or short-term anxiolytics) when needed.",
    prevention: "Stress reduction strategies, regular exercise, adequate sleep, avoid stimulants like caffeine, and seek timely mental health support."
  },

  "Cancer": {
    symptoms: "Varied and often subtle: unexplained weight loss, persistent fatigue, lumps, unusual bleeding, persistent cough, or changes in bowel habits. Symptoms depend on cancer type and stage.",
    causes: "Cellular DNA mutations triggered by carcinogens (tobacco, UV radiation), infections (HPV, HBV/HCV), chronic inflammation, poor diet, or hereditary factors.",
    treatment: "Treatment depends on type and stage: surgery, chemotherapy, radiation, targeted therapy, immunotherapy, and palliative care as needed.",
    prevention: "Avoid tobacco and excessive alcohol, sun protection, vaccinations (HPV, Hep B), healthy diet, regular exercise, and age-appropriate cancer screenings."
  },

  "Stroke": {
    symptoms: "Sudden numbness or weakness of face/arm/leg (usually one side), slurred speech, confusion, difficulty walking, severe headache, or loss of balance—seek emergency care immediately.",
    causes: "Ischemic stroke due to blood clots or hemorrhagic stroke due to vessel rupture; major risk factors include hypertension, diabetes, atrial fibrillation, smoking, and high cholesterol.",
    treatment: "Emergency interventions (clot-busting drugs or thrombectomy for ischemic stroke) and supportive rehab (physiotherapy, speech therapy). Rapid treatment improves outcomes.",
    prevention: "Control blood pressure and diabetes, manage cholesterol, avoid smoking, maintain healthy weight, and treat heart rhythm problems when present."
  },

  "Heart Attack": {
    symptoms: "Chest pain or pressure (may radiate to shoulder, arm, jaw, or back), shortness of breath, sweating, nausea, lightheadedness, and sudden weakness—call emergency services immediately.",
    causes: "Acute blockage of coronary arteries from plaque rupture and blood clot formation; risk factors include atherosclerosis, high blood pressure, smoking, high cholesterol, diabetes, and sedentary lifestyle.",
    treatment: "Immediate emergency care (aspirin, nitroglycerin), reperfusion therapy (angioplasty or thrombolysis), cardiac care, and long-term meds and cardiac rehabilitation.",
    prevention: "Adopt heart-healthy diet, regular exercise, quit smoking, control blood pressure and cholesterol, manage diabetes, and reduce stress."
  },

  "Eczema": {
    symptoms: "Dry, itchy, inflamed patches of skin that may crack, bleed, or ooze; often worse with scratching and during flare-ups.",
    causes: "Combination of genetic tendency, immune system dysregulation, skin barrier defects, and exposure to irritants or allergens (soaps, fragrances, certain fabrics).",
    treatment: "Regular moisturization, topical steroid or non-steroidal anti-inflammatory creams during flares, antihistamines for itch, and avoiding triggers. Severe cases may need systemic therapy.",
    prevention: "Use gentle, fragrance-free skincare products, keep skin hydrated, avoid known irritants, and maintain a humid environment in dry seasons."
  },

  "Bronchitis": {
    symptoms: "Persistent cough often producing mucus, chest discomfort, fatigue, mild fever, and shortness of breath. Acute bronchitis typically follows a viral infection.",
    causes: "Most commonly viral infections; smoking and long-term exposure to air pollutants or irritants increase risk and can lead to chronic bronchitis.",
    treatment: "Supportive care (rest, fluids, cough expectorants), bronchodilators if wheeze present, and antibiotics only if bacterial infection is confirmed.",
    prevention: "Avoid smoking and polluted environments, practice hand hygiene, get vaccinated for influenza, and treat respiratory infections early."
  },

  "Ulcer": {
    symptoms: "Burning or gnawing stomach pain (often relieved by eating or antacids), bloating, heartburn, nausea, and in severe cases vomiting blood or black stools.",
    causes: "Most commonly due to Helicobacter pylori infection or prolonged use of NSAIDs; stress and smoking may worsen symptoms.",
    treatment: "Eradication of H. pylori with antibiotics, acid suppression with proton pump inhibitors, and lifestyle changes (avoid NSAIDs, reduce smoking/alcohol).",
    prevention: "Avoid long-term NSAID use unless necessary, get tested and treated for H. pylori if symptomatic, and maintain a balanced diet and stress management."
  },

  "Kidney Stones": {
    symptoms: "Sudden severe flank or abdominal pain radiating to groin, blood in urine, nausea, vomiting, and painful urination. Pain can be intermittent as stones move.",
    causes: "Formation of mineral crystals (calcium, oxalate, uric acid) in kidneys due to dehydration, high salt or protein diets, metabolic disorders, or genetics.",
    treatment: "Pain control, increased fluid intake to pass small stones, medical expulsive therapy, lithotripsy to break larger stones, or surgical removal for obstructing stones.",
    prevention: "Stay well-hydrated, limit excessive salt and animal protein, maintain healthy calcium intake, and reduce high-oxalate foods if prone to stones."
  },

  "Jaundice": {
    symptoms: "Yellowing of skin and eyes, dark urine, pale stools, fatigue, loss of appetite, and abdominal discomfort. Indicates elevated bilirubin.",
    causes: "Caused by increased bilirubin from liver inflammation/damage (hepatitis), bile duct obstruction, hemolysis, or genetic disorders affecting bilirubin metabolism.",
    treatment: "Address the underlying cause—antivirals for viral hepatitis, surgery for obstruction, supportive care, and sometimes hospitalization for severe cases.",
    prevention: "Vaccination against hepatitis A and B where recommended, safe food and water practices, avoid excessive alcohol, and prompt treatment of liver-related illnesses."
  }
};

const select = document.getElementById("diseaseSelect");
Object.keys(diseases).forEach(disease => {
  const option = document.createElement("option");
  option.value = disease;
  option.textContent = disease;
  select.appendChild(option);
});

// ================================
//  Display Disease Details
// ================================
select.addEventListener("change", () => {
  const selected = select.value;
  const infoDiv = document.getElementById("diseaseInfo");

  if (!selected) {
    infoDiv.innerHTML = "<h3>Select a disease to see details</h3>";
    return;
  }

  const data = diseases[selected];
  infoDiv.innerHTML = `
    <h3>${selected}</h3>
    <p><strong>Symptoms:</strong> ${data.symptoms}</p>
    <p><strong>Causes:</strong> ${data.causes}</p>
    <p><strong>Treatment:</strong> ${data.treatment}</p>
    ${data.prevention ? `<p><strong>Prevention:</strong> ${data.prevention}</p>` : ""}
  `;
});

// ================================
//  Responsive Navbar Toggle
// ================================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});