<?php
/**
 * Created by PhpStorm.
 * User: wangjiang
 * Date: 2018/9/21
 * Time: 15:12
 */

namespace app\home\controller;
use think\Controller;

class Stdetails extends Controller
{
    public function index(){

        return $this -> fetch();
    }
}