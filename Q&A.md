# 1. 遇到直接controller（action） 中传递string ， 返回string ，无响应

在模拟客户端里面，还不会自动装箱，会出现无法序列化异常,因为默认是pb的序列方式，所以改成了自定义的类

同时响应返回的事stringvalue ，需要正确接受才行

# 2. 遇到异常没有任何提示

框架内部使用slf4j 注解打印的，需要添加日志框架依赖，推荐logback

```
        <dependency>
            <groupId>ch.qos.logback</groupId>
            <artifactId>logback-classic</artifactId>
            <version>${logback.version}</version>
        </dependency>
```

# 3. 模拟器客户端，直接打印result 为空 null

需要调用 result.getValue , 才会有值

```
        public <T> T getValue(Class<?extends T> clazz){
            byte[]data=this.message.getData();
    
            if(Objects.isNull(this.value)){
                this.value=DataCodecKit.decode(data,clazz);
            }
            return(T)value;
        }
```
