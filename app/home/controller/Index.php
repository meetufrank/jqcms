<?php
/**
 * Created by PhpStorm.
 * User: wangjiang
 * Date: 2018/9/21
 * Time: 14:34
 */
namespace app\home\controller;
use think\Controller;

class Index extends Controller
{
   public function index(){

      return $this -> fetch();
   }
}