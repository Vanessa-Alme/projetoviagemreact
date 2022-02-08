package services;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.Scanner;

import connector.ConexaoBanco;
import model.Contato;

public class ContatoService {
	
	public void save () {
		Scanner sc = new Scanner (System.in);
		
		Contato contato = new Contato();
		
		System.out.println("Digite o seu Nome");
		contato.setNome(sc.nextLine());
		
		System.out.println("Digite o seu E-mail");
		contato.setEmail(sc.nextLine());
		
		System.out.println("Digite o seu Telefone");
		contato.setTelefone(sc.nextLine());
		
		System.out.println("Digite a sua Mensagem");
		contato.setMensagem(sc.nextLine());
		
		String sql = "INSERT INTO Contato(nome, email, mensagem, telefone)VALUES(?,?,?,?)";
		
		Connection conn= null;
		PreparedStatement pstm = null;
		try {
			conn = ConexaoBanco.createConnection();
			pstm = conn.prepareStatement(sql);
			
			pstm.setString(1, contato.getNome());
			pstm.setString(2, contato.getEmail());
			pstm.setString(3, contato.getMensagem());
			pstm.setString(4, contato.getTelefone());
			
			pstm.execute();
			
			System.out.println("Mensagem enviada com sucesso!");
			
			conn.close();
			pstm.close();
			
		} catch (Exception ex) {
			System.out.println(ex.getMessage());
		} 
		

	}
	
}
