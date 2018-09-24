<?php
/**
 * Created by PhpStorm.
 * User: wangjiang
 * Date: 2018/9/21
 * Time: 15:14
 */

namespace app\home\controller;
use think\Controller;
use think\Validate;
use think\Db;
class Stwriter extends Controller
{
    public function index(){

        //查询部门
        db('auth_group')->where("")->select($data);

        return $this -> fetch();
    }




    //添加写信
    public function add(){

        $data = [
            'name' => input('name'),    //标题
            'type' => input('type'),    //信件类型
            'department' => input('department'),    //部门
            'content' => input('content'),    //内容
            'username' => input('username'),    //姓名
            'tel' => input('tel'),    //电话
            'files' => str_replace('"', '', input('filename')),    //上传名称
        ];

        $id = db('emailbox')->insertGetId($data);




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



    //不公开
    public function bgk(){

        $id = $_POST['id'];
        $pwd = md5($_POST['pwd']);
        $data = [
            'pwd' => $pwd,
        ];
/*print_r($id);
        print_r($pwd);
exit;*/
        Db::name('emailbox')
            ->where("id = $id")
            ->update($data);
    }
}