<?php
set_time_limit(0);
class UploadFile{
	protected $filepath; //上传路径
	protected $fileinfo; //文件信息
	protected $extfile; //文件扩展名
	protected $filename; //文件名
	protected $filesizes; //文件大小
	protected $UpFileType;//上传文件类型
	protected $myfile;//formfiles.js里的文件上传路径
	public $msg;
	
	//执行上传文件
	function upfileload($postname,$filepath,$upfiletype,$setsize,$action='',$refile=''){
		$this->fileoption($postname,$upfiletype,$filepath);
		$this->fileError($this->extfile,$this->UpFileType);
        $this->delReFile($refile);
		$this->upfiles($this->filesizes,$this->filepath,$this->filename,$setsize);
		if($action=="head"){
			import("Common.Org.Images");
			$img=new \Images($filepath);
			$img->thumb($this->filename,150,150,"");
		}
		if($action=="zip"){
			import("Common.Org.Images");
			$img=new \Images($filepath);
			$img->thumb($this->filename,400,400,"");
		}
	}
    //删除修改时已上传的文件
    private function delReFile($refile){
        if(is_file($refile)){
            @unlink($refile);
        }
    }

	//获取文件属性
	private function fileoption($postname,$FileType,$filepath){
		$this->myfile=$postname;
		$this->fileinfo=pathinfo($_FILES["{$this->myfile}"]["name"]); //获取文件信息
		$this->extfile=strtolower($this->fileinfo["extension"]); //获取文件扩展名
		$this->filename=$this->uniqueId().".".$this->extfile; //自动生成文件名
		$this->filesizes=$_FILES["{$this->myfile}"]["size"]/1024;//1kB
		$this->UpFileType=$FileType;//获取文件类型:设置模式array("jpg","gif","png","jpeg")
		$this->filepath=$filepath."/".$this->filename;//获取文件路径
	}
	
	//设置文件错误提示
	private function fileError($extfile,$upfiletype){
		if ($_FILES["{$this->myfile}"]["error"]>0){
			switch($_FILES["{$this->myfile}"]["error"]){
				case 1:
					$this->msg="{\"msg\":\"0\",\"msbox\":\"上传文件超过了php.ini中upload_max_filesize这个选项设置的值\"}";
					break;
				case 2:
					$this->msg="{\"msg\":\"0\",\"msbox\":\"上传的文件大小超过了HTML表单中MAX_FILE_SIZE选项指定的值\"}";
					break;
				case 3:
					$this->msg="{\"msg\":\"0\",\"msbox\":\"文件只有部分被上传\"}";
					break;
				case 4:
					$this->msg="{\"msg\":\"0\",\"msbox\":\"没有文件上传\"}";
					break;
			}
		}else{
			if (!in_array($extfile,$upfiletype) || preg_match('/(<\?php)|(<script)|(<html)|(<iframe)|(<body)/i',file_get_contents($_FILES["{$this->myfile}"]["tmp_name"]),$con)){
				$this->msg="{\"msg\":\"0\",\"msbox\":\"文件类型上传不正确\"}";
			}
		}
	}
	
	//执行文件上传
	private function upfiles($filesize,$filepath,$filename,$setsize){
		if(is_uploaded_file($_FILES["{$this->myfile}"]["tmp_name"])){
			if($filesize<$setsize){
				if(move_uploaded_file($_FILES["{$this->myfile}"]["tmp_name"],$filepath)){
					$this->msg="{\"msg\":\"1\",\"msbox\":\"".$filename."\"}";
				}else{
					$this->msg="{\"msg\":\"0\",\"msbox\":\"上传文件失败\"}";	
				}
			}else{
				$this->msg="{\"msg\":\"0\",\"msbox\":\"文件大小超过了限制\"}";
			}
		}
	}
	
	private function uniqueId(){
		$qidarr=@explode(".",uniqid('',true));
		$qid=rand(1,9).$qidarr[1];
		return $qid;	
	}
	
}
?>