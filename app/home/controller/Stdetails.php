<?php
/**
 * Created by PhpStorm.
 * User: wangjiang
 * Date: 2018/9/21
 * Time: 15:12
 */

namespace app\home\controller;
use think\Controller;
use app\common\logic\ReplymessLogic;
class Stdetails extends Controller
{
    
    public function _initialize() {
        //查询部门列表
       $bmlist=db('auth_group')->where(['type'=>2])->select();
        $this->assign('bmlist',$bmlist);  
    }
    public function index(){
        
        
        //接收id后是否需要密码
        $id= request()->param('id');
        $pwd= request()->param('pwd');
        if($id){
           $data= ReplymessLogic::getInstance()->getMessContent($id); //查询部门信件内容
           if(!empty($data['mess'])){
               $mess=$data['mess'];
               if($mess['is_public']!=1){
                  if(md5($pwd)!=$mess['pwd']) {
                      
                      $this->error('密码错误，将返回列表页', url('home/Index/index')) ;
                  }
               }
               
            //print_r($data);exit;
            $this->assign('content',$data);
             return $this -> fetch();
           
        
          
           }
        }
    }
    
    
    //验证密码
    public function validpwd() {
        
        $data=request()->param();
        $data['pwd']= md5($data['pwd']);
        $data['deletetime']=0;
        
        
        $count=db('emailbox')->where($data)->count();
        
        if($count>0){
            echo json_encode([
                'code'=>1,
                'msg'=>'密码正确',
            ]);
        }else{
            echo json_encode([
                'code'=>0,
                'msg'=>'密码错误',
            ]);
        }
        exit;
    }
    
    
}