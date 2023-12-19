# Hello World App

hello world is a sample app which is made to deploy on AWS EC2 linux machine.

#### To install nvm :

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

#### To activate nvm :

```
 . ~/.nvm/nvm.sh
```

#### To install git :

```
command 1 : sudo yum update
command 2 : sudo yum install git
```

#### Check the version of git :
```
git -v
```

#### Clone Repository
```
git clone  <repository url>
```
#### NOTE : Go to file which starts the project by command : 
```
for ex : cd  <file name>
run the file : node <file name>
```

##### Note : How to setup port manually 
 EC2 dashboard -> ec2 machine info -> security -> security groups -> Inbound rules (Edit inbound rules) -> security group ruleId (not SSH) -> set type to  (select Custom TCP) -> port range (according to user) -> save rules

#### Output Link for browser :
```
http://3.109.143.195:5000/sample
```

#### Links to learn from:
[AWS Docs](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html)

