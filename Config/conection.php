<?php
    class conectar{
        protected $dbh;
        protected function conexion(){
            try{
                $conectar = $this ->dbh=new PDO("mysql:local=localhost;dbname=crus2","root","");
                return $conectar;
            }catch(Exeption $e){
                    print "¡Error DB!: ". $e->getMessage() . "<br/>";
                    die();
            }
        }
        public function set_names(){
            return $this ->dbh->query("SET NAMES 'utf8'");
        }
    }
?>