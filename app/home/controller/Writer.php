<?php
namespace  app\home\controller;
use think\Controller;

Class Writer extends Controller{

    public function index(){
        return $this -> fetch();
    }
}