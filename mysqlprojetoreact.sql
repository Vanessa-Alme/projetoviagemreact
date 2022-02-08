create schema Projetoreact;
use Projetoreact;

create table Contato(
	id int primary key auto_increment,
    nome varchar (50),
    email varchar (30),
    mensagem varchar (200),
    telefone varchar (30)
);




