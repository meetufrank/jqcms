<?php
namespace  app\home\controller;
use think\Controller;

Class Writer extends Controller{

    public function index(){

        //查询部门
        $bmlist = db('auth_group')->where(['type'=>3])->select();
        $this->assign('bmlist',$bmlist);
        return $this -> fetch();
    }

    //添加写信
    public function add(){


        if(input('pwd') == ''){
            $pwd = input('pwd');
        }else{
            $pwd = md5(input('pwd'));
        }


        $data = [
            'name' => input('name'),    //标题
            'type' => input('type'),    //信件类型
            'header' => input('department'),    //首长
            'content' => input('content'),    //内容
            'username' => input('username'),    //姓名
            'tel' => input('tel'),    //电话
            'files' => str_replace('"', '', input('filename')),    //上传名称
            'pwd' => $pwd,    //密码
        ];


        $id = db('heademail')->insertGetId($data);
        return $id;

    }


    //上传文件
    public function uploads(){

        $file = $this->request->file('file');
        $info = $file->move('public/uploads');
        if($info){

        }else{
            // 上传失败获取错误信息
            echo $file->getError();
        }

        $filename = $info->getFilename();
        echo json_encode($filename);

    }
}