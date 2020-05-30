using Microsoft.EntityFrameworkCore;
using OnlineFruitVegShop.API.Data;
using OnlineFruitVegShop.API.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;


namespace OnlineFruitVegShop.API.Repositories.Implementations
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class
    {
   
            protected readonly DataContext _context;

            public GenericRepository(DataContext context)
            {
                _context = context;
            }

            public async Task<TEntity> Get(int id)
            {
                return await _context.Set<TEntity>().FindAsync(id);
            }

            public async Task<List<TEntity>> GetAll()
            {
                return await _context.Set<TEntity>().ToListAsync();
            }

            public async Task<List<TEntity>> Find(Expression<Func<TEntity, bool>> predicate)
            {
                return await _context.Set<TEntity>().Where(predicate).ToListAsync();
            }

            public async Task Add(TEntity entity)
            {
                await _context.Set<TEntity>().AddAsync(entity);
            }

             public void  Update(TEntity entity)
            {
                _context.Set<TEntity>().Attach(entity);
            }

          

            public async Task AddRange(IEnumerable<TEntity> entities)
            {
                await _context.Set<TEntity>().AddRangeAsync(entities);
            }

            public void Remove(TEntity entity)
            {
                _context.Set<TEntity>().Remove(entity);
            }

            public void RemoveAll(IEnumerable<TEntity> entities)
            {
                _context.Set<TEntity>().RemoveRange(entities);
            }
    }
}