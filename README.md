## Kiểm tra trạng thái Redis trên Ubuntu 
redis-cli ping

## Chạy Redis trên Ubuntu thông qua Snap Package Manager
1) sudo snap services       (xem cái nào đang chạy hay dừng)
2) sudo snap start redis    (chạy redis)
3) redis.cli                (truy cập vào redis)

## Redis syntax
4) set key value            (gán dữ liệu cho key)
5) get key/value            (lấy dữ liệu hoặc key)
6) mget/mset key value      (lấy hoặc gán dữ liệu cho nhiều key hoặc value cùng một dòng lệnh)
7) incr key                 (tăng giá trị cho value của key lên 1, vi du: count = 8, incr count => count = 9)
8) incrby key number        (tăng giá trị cho value của key tùy thích)
9) decr key                 (giảm giá trị cho value của key xuống 1 )
10) decrby key              (giảm giá trị cho value của key xuống tùy thích)
11) expire key second       (set thời gian hết hạn cho key)
12) ttl key                 (kiểm tra thời gian tồn tại của key)
13) keys *                  (hiển thị ra tất cả các key đã set)
14) del key                 (xóa key)
15) setex key second value  (set thời gian hết hạn cho key)
16) EXISTS key              (kiểm tra key có tồn tại không)
17) STRLEN key              (độ dài của key)
    
## Lists (danh sách các string được sắp xếp theo thứ tự chèn vào)
18) lpush users user_1      (thêm phần tử vào đầu trái danh sách)
19) rpush users user_3      (thêm phần tử vào đầu phải danh sách)
20) lrange users 0 10       (xem các phần tử có trong list)
21) lpop users              (remove và get phần tử ở đầu trái của list)
22) rpop users              (remove và get phần tử ở đầu phải của list)
23) LTRIM key start stop                  ( trim a list to the specified range)
24) RPOPLPUSH source destination          ( remove the last element in a list, prepend it to another list and return it)
25) BLPOP key [key ...] timeout           ( remove and get the first element in a list, or block until one is available)
26) BRPOP key [key ...] timeout           ( remove and get the last element in a list, or block until one is available)
