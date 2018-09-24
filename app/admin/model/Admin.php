<?php
namespace app\admin\model;
use think\Model;
class Admin extends Model
{
	public function login($data){
		$user=db('admin')->where('username',$data['username'])->find();
		if($user){
			if($user['pwd'] == md5($data['password'])){
                                $group=db('auth_group')->where('group_id',$user['group_id'])->find();
                                session('grouptype',$group['type']);
                                session('groupid',$user['group_id']);
				session('username',$user['username']);
				session('aid',$user['admin_id']);
				$avatar = $user['avatar']==''?'/static/admin/images/0.jpg':$user['avatar'];
				session('avatar',$avatar);
				return 1; //信息正确
			}else{
				return -1; //密码错误
			}
		}else{
			return -1; //用户不存在
		}
	}

}
