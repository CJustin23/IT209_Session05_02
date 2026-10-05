# Bài 2 - Interactive Rebase

## Nội dung bài

Repository này minh họa việc tái cấu trúc 4 commit thử nghiệm:

| Commit ban đầu | Hành động |
| --- | --- |
| `feat: khoi tao module auth` | `pick` |
| `fix typo` | `squash` |
| `adds utility functions` | `squash` |
| `add temp file for debug` | `drop` |

Vì repository chỉ có đúng 4 commit và commit đầu tiên là commit gốc, lệnh tương đương được sử dụng là:

```bash
git rebase -i --root
```

Với repository có commit nền phía trước, có thể dùng `git rebase -i HEAD~4` như hướng dẫn đề bài.

Nội dung cấu hình trong màn hình Interactive Rebase:

```text
pick   feat: khoi tao module auth
squash fix typo
squash adds utility functions
drop   add temp file for debug
```

Sau khi squash, thông điệp cuối cùng được đổi thành:

```text
feat: hoan thien module authentication
```

## Kết quả kiểm tra

Lệnh:

```bash
git log --oneline
```

Kết quả:

```text
<hash> feat: hoan thien module authentication
```

Kiểm tra bổ sung:

```bash
git status --short
# không có đầu ra

Get-ChildItem
# auth.js và README.md; không có temp.txt
```

## Cách chụp và nộp bài

1. Mở thư mục `B2` trong VS Code hoặc terminal.
2. Chạy `git log --oneline` và chụp màn hình kết quả chỉ còn một commit.
3. Nếu cần chụp lại giao diện cấu hình rebase, chạy `git rebase -i --root` trên một bản sao/nhánh tạm, giữ nguyên nội dung `pick`, `squash`, `squash`, `drop` như bảng trên, rồi chụp màn hình trình soạn thảo trước khi lưu. Không chạy lại trên nhánh đã hoàn tất nếu không cần thiết.
4. Chèn hai ảnh vào README, ví dụ:

   ```markdown
   ![Cấu hình Interactive Rebase](./interactive-rebase.png)
   ![Log sau khi rebase](./clean-log.png)
   ```

5. Đặt các tệp cần nộp trong đường dẫn repository:

   ```text
   homework/session_05/ex2/
   ```

6. Từ thư mục gốc repository GitHub, chạy:

   ```bash
   git add homework/session_05/ex2/
   git commit -m "docs: submit interactive rebase exercise"
   git push origin <ten-nhanh-cua-ban>
   ```

7. Mở GitHub kiểm tra đúng đường dẫn `homework/session_05/ex2/`, có `README.md`, `auth.js` và các ảnh minh chứng (nếu đã thêm).
