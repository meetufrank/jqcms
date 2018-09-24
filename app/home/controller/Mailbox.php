<?php
namespace  app\home\controller;
use think\Controller;

Class Mailbox extends Controller{

    public function index(){
        return $this -> fetch();
    }
}