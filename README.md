## Chạy Redis trên Ubuntu thông qua Snap Package Manager
1) sudo snap services (xem cái nào đang chạy hay dừng)
2) sudo snap start redis (chạy redis)
3) sudo snap stop redis (dừng redis)
4) redis.cli (truy cập vào redis)

## Redis syntax
1) set key value (gán dữ liệu cho key)
2) get key/value (lấy dữ liệu hoặc key)
3) mget/mset key value (lấy hoặc gán dữ liệu cho nhiều key hoặc value cùng một dòng lệnh)
4) incr key (tăng giá trị cho value của key lên 1, vi du: count = 8, incr count => count = 9)
5) incrby key number (tăng giá trị cho value của key tùy thích)
6) decr key (giảm giá trị cho value của key xuống 1 )
7) decrby key (giảm giá trị cho value của key xuống tùy thích)
8) expire key second (set thời gian hết hạn cho key)
9) ttl key (kiểm tra thời gian tồn tại của key)
10) keys * (hiển thị ra tất cả các key đã set)
11) del key (xóa key)
