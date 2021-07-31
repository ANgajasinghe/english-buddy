using System;
using System.Threading;
using System.Threading.Tasks;
using EnglishBuddy.Domain.Common;
using EnglishBuddy.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace EnglishBuddy.Application.Persistence
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Activity> Activities { get; set; }
        public DbSet<ActivityResult> ActivityResults { get; set; }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<CourseCategory> CourseCategories { get; set; }
        public DbSet<CourseType> CourseTypes { get; set; }
        public DbSet<CourseComment> CourseComments { get; set; }
        public DbSet<Lesson> Lessons { get; set; }
        public DbSet<LessonComment> LessonComments { get; set; }
        public DbSet<SamplesQuestion> SamplesQuestions { get; set; }
        
        public DbSet<UserLesson> UserLessons { get; set; }
        public DbSet<UserActivity> UserActivities { get; set; }
        public DbSet<UserSampleQuestion> UserSampleQuestions { get; set; }
        public DbSet<ApplicationUserCourse> ApplicationUserCourses { get; set; }

        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
        {
            foreach (var entry in ChangeTracker.Entries<AuditableEntity>())
                switch (entry.State)
                {
                    case EntityState.Added:
                        entry.Entity.CreatedUserId = null;
                        entry.Entity.CreatedDate = DateTime.Now;

                        break;

                    case EntityState.Modified:
                        entry.Entity.ModifiedUserId = null;
                        entry.Entity.ModifiedDate = DateTime.Now;
                        break;
                }

            var result = await base.SaveChangesAsync(cancellationToken);

            return result;
        }
    }
}