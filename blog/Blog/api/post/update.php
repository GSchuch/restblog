<?php
    header('Content-Type: application/json, charset=utf-8');
    
    require_once '../../config/Conexao.php';
    require_once '../../models/Post.php';
    
    if($_SERVER['REQUEST_METHOD'] == 'PUT') {
    	$db = new Conexao();
    	$con = $db->getConexao();

        $post = new Post($con);
        $dados = json_decode(file_get_contents("php://input"));

        $post->id = $dados->id;
        $post->titulo = $dados->titulo;
        $post->texto = $dados->texto;
        $post->autor = $dados->autor;


        if($post->update()) {
        	$res = array('mensagem' => 'post atualizada');
        } else {
        	$res = array('mensagem' => 'Erro na atualização da post');
        }
        echo json_encode($res);
    }
    