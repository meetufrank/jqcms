<?php
namespace  app\home\controller;
use think\Controller;

Class Details extends Controller{

    public function index(){
        return $this -> fetch();
    }
}