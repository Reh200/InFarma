<?php
include 'config.php';  // Inclui o arquivo de configuração com o e-mail do destinatário

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta as informações do formulário
    $nome = htmlspecialchars($_POST["nome"]);
    $email = htmlspecialchars($_POST["email"]);
    $mensagem = htmlspecialchars($_POST["mensagem"]);

    $destinatario = EMAIL_DESTINO;  // E-mail do destinatário (você)
    $assunto = "Novo contato de $nome";  // Assunto do e-mail
    $corpo = "Nome: $nome\nEmail: $email\n\nMensagem:\n$mensagem";  // Corpo do e-mail
    $headers = "From: $email\r\n";  // Agora o remetente é o e-mail digitado pelo usuário
    $headers .= "Reply-To: $email\r\n";  // Resposta será enviada para o e-mail do remetente

    // Envio do e-mail
    if (mail($destinatario, $assunto, $corpo, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar a mensagem.";
    }
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Contato - Biblioteca Virtual de Farmácia</title>
    <!-- Linkando o arquivo CSS -->
    <link rel="stylesheet" href="contatophp.css">
</head>
<body>
    <div class="container">
        <h1>Contato</h1>
        <p>Entre em contato para dúvidas ou sugestões.</p>
        <form action="" method="post">
            <div class="input-group">
                <label for="nome">Nome</label>
                <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required>
            </div>
            <div class="input-group">
                <label for="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required>
            </div>
            <div class="input-group">
                <label for="mensagem">Mensagem</label>
                <textarea id="mensagem" name="mensagem" rows="4" placeholder="Escreva sua mensagem..." required></textarea>
            </div>
            <button type="submit">Enviar</button>
        </form>
    </div>
</body>
</html>


