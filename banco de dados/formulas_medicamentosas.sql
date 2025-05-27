CREATE TABLE formulas_medicamentosas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    medicamento_id INT,
    formula VARCHAR(255) NOT NULL,
    FOREIGN KEY (medicamento_id) REFERENCES medicamentos(id)
);
