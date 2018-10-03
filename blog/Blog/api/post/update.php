<?php

	header('Acess-Control-Allow-Origin: *');
	header('Content-Type: application/json');
	
	require_once '../../config/Conexao.php';
	require_once '../../models/Post.php';

    if($_SERVER['REQUEST_METHOD'] == 'PUT') {
    	$db = new Conexao();
    	$con = $db->getConexao();

       $dados = json_decode(file_get_contents("php://input"));

        $post = new Post($con);
        $post->titulo = $dados->titulo;
        $post->texto = $dados->texto;
        $post->id_categoria = $dados->id_categoria;
        $post->autor = $dados->autor;


        if($post->update()) {
        	$res = array('mensagem' => 'Post atualizado');
        } else {
        	$res = array('mensagem' => 'Erro na atualização da Post');
        }
        echo json_encode($res);
    }