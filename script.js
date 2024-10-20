document.addEventListener('DOMContentLoaded', function() {
    const subjects = document.querySelectorAll('.subject');
    const teacherModal = new bootstrap.Modal(document.getElementById('teacherModal'));
    const teacherName = document.getElementById('teacherName');
    const teacherSubject = document.getElementById('teacherSubject');
    const teacherEmail = document.getElementById('teacherEmail');
    const teacherPhone = document.getElementById('teacherPhone');
    const contactTeacherBtn = document.getElementById('contactTeacher');

    subjects.forEach(subject => {
        subject.addEventListener('click', function() {
            const teacher = this.dataset.teacher;
            const subjectName = this.dataset.subject;
            
            // In a real application, you would fetch this data from a server
            const teacherDetails = {
                'John Doe': { email: 'john.doe@example.com', phone: '123-456-7890' },
                'Jane Smith': { email: 'jane.smith@example.com', phone: '098-765-4321' }
            };

            teacherName.textContent = teacher;
            teacherSubject.textContent = subjectName;
            teacherEmail.textContent = teacherDetails[teacher].email;
            teacherPhone.textContent = teacherDetails[teacher].phone;

            teacherModal.show();
        });
    });

    contactTeacherBtn.addEventListener('click', function() {
        const email = teacherEmail.textContent;
        window.location.href = `mailto:${email}`;
    });
});