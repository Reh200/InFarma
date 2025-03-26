-- Criação do banco de dados
CREATE DATABASE MedicamentosDB;

-- Usar o banco de dados criado
USE MedicamentosDB;

-- Criação da tabela para armazenar as bulas e seus links
CREATE TABLE Bulas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_medicamento VARCHAR(255) NOT NULL,
    link_bula VARCHAR(255) NOT NULL
);

-- Inserção dos dados com os medicamentos e links confiáveis para bulas de medicamentos reais
INSERT INTO Bulas (nome_medicamento, link_bula) VALUES
('Paracetamol', 'https://www.bula.com.br/medicamento/paracetamol/'),
('Dipirona', 'https://www.bula.com.br/medicamento/dipirona/'),
('Ibuprofeno', 'https://www.bula.com.br/medicamento/ibuprofeno/'),
('Amoxicilina', 'https://www.bula.com.br/medicamento/amoxicilina/'),
('Omeprazol', 'https://www.bula.com.br/medicamento/omeprazol/'),
('Losartana', 'https://www.bula.com.br/medicamento/losartana/'),
('Cloridrato de Sertralina', 'https://www.bula.com.br/medicamento/cloridrato-de-sertralina/'),
('Azitromicina', 'https://www.bula.com.br/medicamento/azitromicina/'),
('Lorazepam', 'https://www.bula.com.br/medicamento/lorazepam/'),
('Metformina', 'https://www.bula.com.br/medicamento/metformina/'),
('Cefalexina', 'https://www.bula.com.br/medicamento/cefalexina/'),
('Losartan Potássico', 'https://www.bula.com.br/medicamento/losartan-potassico/'),
('Furosemida', 'https://www.bula.com.br/medicamento/furosemida/'),
('Simvastatina', 'https://www.bula.com.br/medicamento/simvastatina/'),
('Alprazolam', 'https://www.bula.com.br/medicamento/alprazolam/'),
('Dipirona Sódica', 'https://www.bula.com.br/medicamento/dipirona-sodica/'),
('Carbamazepina', 'https://www.bula.com.br/medicamento/carbamazepina/'),
('Fluoxetina', 'https://www.bula.com.br/medicamento/fluoxetina/'),
('Nimesulida', 'https://www.bula.com.br/medicamento/nimesulida/');

-- Consultar os dados inseridos
SELECT * FROM Bulas;

INSERT INTO Bulas (nome_medicamento, link_bula) VALUES
('Dexametasona', 'https://www.bula.com.br/medicamento/dexametasona/'),
('Clonazepam', 'https://www.bula.com.br/medicamento/clonazepam/'),
('Captopril', 'https://www.bula.com.br/medicamento/captopril/'),
('Ranitidina', 'https://www.bula.com.br/medicamento/ranitidina/'),
('Vitamimna D', 'https://www.bula.com.br/medicamento/vitamina-d/'),
('Enalapril', 'https://www.bula.com.br/medicamento/enalapril/'),
('Vermox', 'https://www.bula.com.br/medicamento/vermox/'),
('Bromoprida', 'https://www.bula.com.br/medicamento/bromoprida/'),
('Cimetidina', 'https://www.bula.com.br/medicamento/cimetidina/'),
('Mebendazol', 'https://www.bula.com.br/medicamento/mebendazol/'),
('Levodopa', 'https://www.bula.com.br/medicamento/levodopa/'),
('Loratadina', 'https://www.bula.com.br/medicamento/loratadina/'),
('Tetraciciclina', 'https://www.bula.com.br/medicamento/tetraciciclina/'),
('Tramadol', 'https://www.bula.com.br/medicamento/tramadol/'),
('Amiodarona', 'https://www.bula.com.br/medicamento/amiodarona/'),
('Fluconazol', 'https://www.bula.com.br/medicamento/fluconazol/'),
('Fenobarbital', 'https://www.bula.com.br/medicamento/fenobarbital/'),
('Hidroxizina', 'https://www.bula.com.br/medicamento/hidroxizina/'),
('Atenolol', 'https://www.bula.com.br/medicamento/atenolol/'),
('Carvedilol', 'https://www.bula.com.br/medicamento/carvedilol/'),
('Dexlansoprazol', 'https://www.bula.com.br/medicamento/dexlansoprazol/');

